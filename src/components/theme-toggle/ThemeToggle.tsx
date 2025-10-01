'use client'

import { Moon, Sun } from "lucide-react";
import {Button} from "@heroui/button";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    return (
        <Button
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            isIconOnly
            className={styles.toggler}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
            {theme === "dark" ? (
                <Sun className={styles.sunIcon} />
            ) : (
                <Moon className={styles.moonIcon} />
            )}
        </Button>
    );
}

export default ThemeToggle;