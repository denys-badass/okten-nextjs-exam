'use client'

import { useState } from 'react'
import { Menu, X,} from 'lucide-react'
import {SearchBar} from "@/components/header/search-bar/SearchBar";
import GenresDropdown from "@/components/genres-dropdown/GenresDropdown";
import {IGenre} from "@/models/IGenre";
import {LoginInfo} from "@/components/header/login-info/LoginInfo";
import {Button} from "@heroui/button";
import Link from "next/link";
import styles from "./MobileMenu.module.css"
import {IUser} from "@/models/IUser";

type Props = {
    genres: IGenre[];
    user: IUser | null;
    loginType: 'guest' | 'user' | null;
}

const MobileMenu = ({ genres, user, loginType }: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <Button
                onPress={toggleMobileMenu}
                className={styles.hamburger}
                aria-label="Toggle menu"
                isIconOnly
            >
                {isMobileMenuOpen ? (
                    <X className={styles.menuIcon} />
                ) : (
                    <Menu className={styles.menuIcon} />
                )}
            </Button>

            {isMobileMenuOpen && (
                <div className={styles.menuWrapper}>
                    <div className={styles.menuContainer}>

                        <div className={styles.searchBar}>
                            <SearchBar/>
                        </div>
                        <Link href="/movies" className={styles.navLink} onClick={closeMobileMenu}>
                            Movies
                        </Link>
                        <div className={styles.genmres}>
                            <GenresDropdown genres={genres} isMobile/>
                        </div>
                        <div className={styles.userDivider}>
                            <div className={styles.userContainer}>
                                <LoginInfo user={user} loginType={loginType}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileMenu;