'use client'

import styles from "./GuestButton.module.css";
import {useLogin} from "@/hooks/useLogin";

export const GuestButton = () => {
    const {loginGuest} = useLogin();

    return (
        <>
            <button className={styles.button} onClick={() => loginGuest()}>
                Continue as Guest
            </button>
        </>

    );
};