import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface LogginPayload {
  username: string;
  password: string;
}

export interface UserState {
  isLoading: boolean;
  user: any;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoading: false,
  user: {},
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LogginPayload>) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    getUser: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    getUserFailed: (state) => {
      state.isLoading = false;
    },
  },
});

//Actions
export const authActions = authSlice.actions;
//selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
//reducer
const authReducer = authSlice.reducer;
export default authReducer;
