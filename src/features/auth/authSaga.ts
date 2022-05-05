import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import authApi from "../../api/authApi";
import { Token, User } from "../../models/User";
import { authActions, LogginPayload } from "./authSlice";

function* handleLogin(payload: LogginPayload) {
  try {
    // const response: Token = yield call(authApi.login, payload);
    const response: Token = {
        access: "access_token",
        refresh: "refresh_token",
    };
    localStorage.setItem("access_token", response.access);
    localStorage.setItem("refresh_token", response.refresh);
    // const user: User = yield call(authApi.getUser, { access: response.access });
    const user: User = {
        id: 1,
        username: "admin",
        password: "admin",
        fullName: "admin",
        phone: "0123456789",
        email: "admin@gmail.com",
    }
    toast.success("🦄 Login success", { autoClose: 5000 });
    yield put(authActions.loginSuccess(user));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
    toast.error("🦄 " + error.message, { autoClose: 5000 });
  }
}

function* handleLogout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  yield put(authActions.logout());
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      //lắng nghe login. đứng đây đợi chờ login.. logout không ảnh hưởng
      const action: PayloadAction<LogginPayload> = yield take(
        authActions.login.type
      );
      //xử lý login
      yield fork(handleLogin, action.payload);
    }
    //Khi đã login thì đừng đây đợi lắng nghe logout
    yield take(authActions.logout.type);
    //xử lý logout
    yield call(handleLogout);
  }
}

function* getUser(action: PayloadAction<any>) {
  try {
    const access = localStorage.getItem("access_token");
    const user: User = yield call(authApi.getUser, { access: access });
    yield put(authActions.getUserSuccess(user));
  } catch (error: any) {
    toast.error("🦄 " + error?.message, { autoClose: 5000 });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    yield put(authActions.logout());
    yield put(authActions.getUserFailed());
    throw Error(error?.message);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
  yield takeLatest(authActions.getUser.type, getUser);
}
