import MovieHubLogo from "@/components/movie-hub-logo/MovieHubLogo";
import LoginForm from "@/components/login-form/LoginForm";
import styles from "./page.module.css"

export default async function LoginPage() {

    return (
            <div className={styles.wrapper}>
                <div className={styles.container}>

                    <div className={styles.header}>
                        <MovieHubLogo className={'welcome'} />
                        <h2 className={styles.heading}>
                            Sign in to continue to MovieHub
                        </h2>
                    </div>

                    <div className={styles.formBlock}>
                        <LoginForm />
                    </div>

                </div>
            </div>
    )
}