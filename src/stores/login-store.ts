import {IUser} from "@/models/IUser";
import {createStore} from "zustand/vanilla";

type LoginState = {
    loginType: 'guest' | 'user' | null;
    user: IUser | null;
}

type LoginActions = {
    setUserLogin: (user: IUser) => void;
    setGuestLogin: () => void;
    logout: () => void;
}

export type LoginStore = LoginState & LoginActions;

const defaultLoginState: LoginState = {
    loginType: null,
    user: null
};

export const createLoginStore = (initState: LoginState = defaultLoginState) => {
    return createStore<LoginStore>()((set) => ({
        ...defaultLoginState,
        setUserLogin: (user: IUser) => {
            set({loginType: 'user', user})
        },
        setGuestLogin: () => {
            set({loginType: 'guest', user: null})
        },
        logout: () => {
            set({loginType: null, user: null})
        },
    }))
}