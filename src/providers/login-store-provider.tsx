'use client'

import {createLoginStore, LoginStore} from "@/stores/login-store";
import {createContext, ReactNode, useContext, useRef} from "react";
import {useStore} from "zustand/react";

type LoginStoreApi = ReturnType<typeof createLoginStore>

export const LoginStoreContext = createContext<LoginStoreApi | undefined>(undefined);

type Props = {
    children: ReactNode
}

export const LoginStoreProvider = ({children}: Props) => {
    const storeRef = useRef<LoginStoreApi | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createLoginStore();
    }

    return (
        <LoginStoreContext.Provider value={storeRef.current}>
            {children}
        </LoginStoreContext.Provider>
    )
}

export const useLoginStore = <T,>(selector: (store: LoginStore) => T): T => {
    const loginStoreContext = useContext(LoginStoreContext);

    if (!loginStoreContext) {
        throw new Error('useLoginStore must be used within a LoginStoreProvider');
    }

    return useStore(loginStoreContext, selector);
}