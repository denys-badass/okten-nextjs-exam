'use client'

import styles from "./GuestButton.module.css";

export const GuestButton = () => {
    return (
        <>
            <button className={styles.button}>
                Continue as Guest
            </button>
        </>

    );
};