import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import MovieHubLogo from "@/components/movie-hub-logo/MovieHubLogo";
import GenresDropdown from "@/components/genres-dropdown/GenresDropdown";
import styles from "./Header.module.css"
import Link from "next/link";
import {movieService} from "@/api/movie.service";
import {SearchBar} from "@/components/header/search-bar/SearchBar";

const Header = async () => {
    const genres = await movieService.getGenres();

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <MovieHubLogo className={'header'} />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Server Component */}
                    <nav className={styles.nav}>
                        <Link href="/movies" className={styles.navLink}>
                            Movies
                        </Link>
                        <GenresDropdown genres={genres} />
                    </nav>

                    {/* Desktop Search - Server Component passes to Client */}
                    <div className="hidden md:block flex-1 max-w-lg mx-8">
                        <SearchBar />
                    </div>

                    {/* Desktop User Info & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/*<UserInfo />*/}
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button + Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        {/*<MobileMenu user={user} genres={genres} />*/}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header