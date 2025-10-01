import type {Metadata} from "next";
import {Inter} from "next/font/google"
import {ReactNode} from "react";
import Header from "@/components/header/Header";
import {HeroProvider} from "@/providers/hero-provider";
import "./globals.css"
import styles from "./layout.module.css"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "MovieHub - Discover Your Next Favorite Film",
    description: "Explore thousands of movies, browse by genres, and find detailed information about your favorite films.",
    icons : {
        icon: "/icon"
    }
}

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
        <HeroProvider>
            <div className={styles.screen}>
                <Header/>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </HeroProvider>
        </body>
        </html>
    )
}