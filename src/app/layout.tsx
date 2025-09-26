import type { Metadata } from 'next';

import { Inter } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import {ThemeStoreProvider} from "@/providers/theme-store-provider";
import Header from "@/components/header/Header";
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MovieHub - Discover Your Next Favorite Film',
    description: 'Explore thousands of movies, browse by genres, and find detailed information about your favorite films.',
}

export default function RootLayout({ children, }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
        <ThemeStoreProvider>
            <div className={styles.screen}>
                <Header />
                <main className="relative">
                    {children}
                </main>
            </div>
        </ThemeStoreProvider>
        </body>
        </html>
    )
}