'use client'

import {useRouter} from "next/navigation";
import {ArrowLeftIcon} from "lucide-react";
import {Button} from "@heroui/button";
import styles from "./BackButton.module.css";

export const BackButton = () => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <Button
                onPress={() => router.back()}
                className={styles.button}
            >
                <ArrowLeftIcon className={styles.arrow} />
                <span className={styles.text}>Go Back</span>
            </Button>
        </div>
    );
};