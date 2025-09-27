'use client'

import styles from "./GuestButton.module.css";
import {useRouter} from "next/navigation";

export const GuestButton = () => {
    const router = useRouter();

    return (
        <>
            <button className={styles.button} onClick={() => router.push('/movies')}>
                Continue as Guest
            </button>
        </>

    );
};