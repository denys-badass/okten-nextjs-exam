'use client'

import {addToast} from "@heroui/toast";
import {loginGuestAction, loginUserAction, logoutUserAction} from "@/actions/auth";
import {useRouter} from "next/navigation";

export const useLogin = () => {
    const router = useRouter();

    const loginHandler = async (data: {username: string, password: string}) => {
        const {username, password} = data;
        try {
            await loginUserAction(username, password)
        } catch (e) {
            console.error(e instanceof Error ? e.message : "Unknown error");
            addToast({
                title: "Failed to log in. Wrong username or password.",
                description: "Please try again.",
                color: "danger",
            })
            return e;
        }
    }

    const loginGuestHandler = async () => {
        await loginGuestAction();
    }

    const logoutHandler = async () => {
        await logoutUserAction();
        router.push("/login");
    }

    return {
        loginHandler,
        loginGuestHandler,
        logoutHandler,
    }
}