'use client'

import {createThemeStore, ThemeStore} from "@/stores/theme-store";
import {createContext, ReactNode, useContext, useRef} from "react";
import {useStore} from "zustand/react";

type ThemeStoreApi = ReturnType<typeof createThemeStore>

export const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(undefined)

type ThemeStoreProviderProps = {
    children: ReactNode
}

export const ThemeStoreProvider = ({children}: ThemeStoreProviderProps) => {
    const storeRef = useRef<ThemeStoreApi | null>(null)
    if (storeRef.current === null) {
        storeRef.current = createThemeStore();
    }

    return (
        <ThemeStoreContext.Provider value={storeRef.current}>
            {children}
        </ThemeStoreContext.Provider>
    )
}

export const useThemeStore = <T,>(selector: (store: ThemeStore) => T): T => {
    const themeStoreContext = useContext(ThemeStoreContext)

    if (!themeStoreContext) {
        throw new Error('useThemeStore must be used within a ThemeStoreProvider');
    }

    return useStore(themeStoreContext, selector);
}