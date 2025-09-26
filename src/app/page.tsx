import MovieHubLogo from "@/components/movie-hub-logo/MovieHubLogo";
import {GuestButton} from "@/components/guest-button/GuestButton";
import {About} from "@/components/about/About";
import styles from "./page.module.css"

export default function HomePage() {
    return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <section className={styles.welcome}>
                        <MovieHubLogo className={'welcome'} />
                        <div className={styles.headingWrapper}>
                            <h1 className={styles.heading}>
                                Welcome to{' '}
                                <span className={styles.headingLogo}>MovieHub</span>
                            </h1>
                            <p className={styles.description}>
                                Discover thousands of movies, explore genres, and find your next favorite film
                            </p>
                        </div>
                    </section>

                    <div className={styles.buttonGroup}>
                        <button className={styles.loginButton}>
                            Log In
                        </button>
                        <GuestButton/>
                    </div>

                    <section className={styles.about}>
                        <About/>
                    </section>
                </div>
            </div>
    )
}