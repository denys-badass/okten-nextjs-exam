'use client'

import {useTheme} from "next-themes";
import {Button} from "@heroui/button";
import {IconMoon, IconSun} from "@tabler/icons-react";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    return (
        <div className={`absolute top-4 right-4`}>
            <Button isIconOnly onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')} color='primary' variant='flat'>
                {theme === 'dark' ? <IconSun/> : <IconMoon/>}
            </Button>
        </div>
    );
};