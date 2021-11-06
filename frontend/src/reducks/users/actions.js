export const SIGN_UP = "SIGN_UP";
export const signUpAction = (users) => {
    return {
        type: "SIGN_UP",
        payload: users
    }
}
export const SIGN_IN = "SIGN_IN";
export const signInAction = (users) => {
    return {
        type: "SIGN_IN",
        payload: users
    }
}
export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: {}
    }
}