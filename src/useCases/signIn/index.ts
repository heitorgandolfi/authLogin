import { loadLogin, loadLoginDone, loadLoginFail } from "../../stores/signIn/events";

const execute = async (): Promise<void> => {
    loadLogin();

    try {
        const storage = localStorage.getItem("userEmail");
        if (storage) {
            loadLoginDone(JSON.parse(storage));
        }
    } catch (error) {
        loadLoginFail("Error while trying to login")
    }
};

export const LoginUseCase = {
    execute,
};

