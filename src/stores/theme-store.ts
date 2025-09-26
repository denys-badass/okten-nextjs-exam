import {createStore} from "zustand/vanilla";

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
    return createStore<ThemeStore>()((set) => ({
            ...initState,
            toggleTheme: () => {
                set((state) => ({
                    theme: state.theme === 'light' ? 'dark' : 'light'
                }));
            },
        }),
    )
}