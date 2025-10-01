'use client'

import {HeroUIProvider} from "@heroui/react"
import {ToastProvider} from "@heroui/toast";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ReactNode} from "react";

export function HeroProvider({children}: { children: ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light">
            <HeroUIProvider>
                <ToastProvider/>
                {children}
            </HeroUIProvider>
        </NextThemesProvider>
    )
}