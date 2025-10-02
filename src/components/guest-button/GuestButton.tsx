'use client'

import {useLogin} from "@/hooks/useLogin";
import styles from "./GuestButton.module.css";

export const GuestButton = () => {
    const {loginGuestHandler} = useLogin();

    return (
        <>
            <button className={styles.button} onClick={loginGuestHandler}>
                Continue as Guest
            </button>
        </>

    );
}