'use client'

import {useLogin} from "@/hooks/useLogin";
import styles from "./GuestButton.module.css";
import {Button} from "@heroui/button";

export const GuestButton = () => {
    const {loginGuestHandler} = useLogin();

    return (
        <>
            <Button className={styles.button} onPress={loginGuestHandler}>
                Continue as Guest
            </Button>
        </>

    );
}