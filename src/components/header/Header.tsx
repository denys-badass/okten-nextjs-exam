import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import MovieHubLogo from "@/components/movie-hub-logo/MovieHubLogo";
import GenresDropdown from "@/components/genres-dropdown/GenresDropdown";
import Link from "next/link";
import {movieService} from "@/api/movie.service";
import {SearchBar} from "@/components/header/search-bar/SearchBar";
import {LoginInfo} from "@/components/header/login-info/LoginInfo";
import MobileMenu from "./mobile-menu/MobileMenu";
import {getLoginType} from "@/helpers/getLoginType";
import {getUser} from "@/helpers/getUser";
import styles from "./Header.module.css"

const Header = async () => {
    const loginType = await getLoginType();
    const user = await getUser();
    const genres = await movieService.getGenres();

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <MovieHubLogo className={"header"} />
                        </Link>
                    </div>

                    <nav className={styles.nav}>
                        <Link href="/movies" className={styles.navLink}>
                            Movies
                        </Link>
                        <GenresDropdown genres={genres} />
                    </nav>

                    <div className={styles.searchBarContainer}>
                        <SearchBar />
                    </div>

                    <div className={styles.desktopRightContainer}>
                        <LoginInfo user={user} loginType={loginType}/>
                        <ThemeToggle />
                    </div>

                    <div className={styles.mobileRightContainer}>
                        <ThemeToggle />
                        <MobileMenu genres={genres} user={user} loginType={loginType}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;