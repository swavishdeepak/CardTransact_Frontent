//import { Middleware } from 'redux'
import { configureStore, } from "@reduxjs/toolkit";
import verifyOtpReducer from "./reducers/verifyOtp";
import employeeReducer from "./reducers/employee";


export const store = configureStore({
    reducer: {
        verifiedUser: verifyOtpReducer,
        employee: employeeReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



