'use client'

import styles from "./LoginForm.module.css"
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

const LoginForm = () => {

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <Input label="Username" name="username" />
                </div>

                <div className={styles.input}>
                    <Input label="Password" name="password" type="password" />
                </div>

                <Button size="lg" type="submit" className={styles.button}>
                    Sign In to MovieHub
                </Button>
            </form>
        </div>
    )
}

export default LoginForm