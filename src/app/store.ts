import {
    combineReducers,
    configureStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga) 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
