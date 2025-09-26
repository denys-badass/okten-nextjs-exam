import {createStore} from "zustand/vanilla";
import {persist} from "zustand/middleware/persist";

type ThemeState = {
    theme: 'light' | 'dark';
}

type ThemeActions = {
    toggleTheme: () => void;
}

export type ThemeStore = ThemeState & ThemeActions;

const defaultThemeState: ThemeState = {
    theme: 'light'
};

export const createThemeStore = (initState: ThemeState = defaultThemeState) => {
    return createStore<ThemeStore>()(
        persist(
            (set) => ({
                ...initState,
                toggleTheme: () => {
                    set((state) => ({
                        theme: state.theme === 'light' ? 'dark' : 'light'
                    }));
                },
            }),
            {
                name: 'theme-storage',
            }
        )
    )
}