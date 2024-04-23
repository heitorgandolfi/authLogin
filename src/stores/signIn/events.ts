import { createEvent } from "effector";

export const loadLogin = createEvent("loadLogin");
export const loadLoginDone = createEvent("loadLoginDone");
export const loadLoginFail = createEvent<string>("loadLoginFail");
