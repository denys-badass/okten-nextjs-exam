'use client'

import { Moon, Sun } from 'lucide-react'
import {useThemeStore} from "@/providers/theme-store-provider";

const ThemeToggle = () => {
    const toggleTheme = useThemeStore(state => state.toggleTheme);
    const theme = useThemeStore(state => state.theme);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-500" />
            ) : (
                <Moon className="h-5 w-5 text-slate-600" />
            )}
        </button>
    )
}

export default ThemeToggle