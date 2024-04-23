import { createStore } from "effector";

import { loadLogin, loadLoginDone, loadLoginFail } from "./events";

type LoginState = {
    hasError: boolean;
    isLoading: boolean;
    errorMessage: string;
    userEmail: void | string;
}

const initialState: LoginState = {
    hasError: false,
    isLoading: false,
    errorMessage: "",
    userEmail: "",
};

export const LoginStore = createStore<LoginState>(initialState)
    .on(loadLogin, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadLoginDone, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: "",
        userEmail: data,
    }))
    .on(loadLoginFail, (_, data) => ({
        hasError: true,
        isLoading: false,
        errorMessage: data,
        userEmail: "",
    }));
