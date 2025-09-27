'use client'

import { Moon, Sun } from 'lucide-react'
import {useTheme} from "@/hooks/useTheme";
import {Button} from "@heroui/button";
import styles from "./ThemeToggle.module.css"

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onPress={toggleTheme}
            isIconOnly
            className={styles.toggler}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            {theme === 'dark' ? (
                <Sun className={styles.sunIcon} />
            ) : (
                <Moon className={styles.moonIcon} />
            )}
        </Button>
    )
}

export default ThemeToggle