'use client'

import {useLogin} from "@/hooks/useLogin";
import styles from "./GuestButton.module.css";

export const GuestButton = () => {
    const {loginGuest} = useLogin();

    return (
        <>
            <button className={styles.button} onClick={loginGuest}>
                Continue as Guest
            </button>
        </>

    );
}