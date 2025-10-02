'use client'

import {IUser} from "@/models/IUser";
import {UserInfo} from "@/components/header/login-info/user/UserInfo";
import {useLogin} from "@/hooks/useLogin";
import styles from "./LoginInfo.module.css";

type Props = {
    user: IUser | null;
    loginType: "guest" | "user" | null;
}

export const LoginInfo = ({user, loginType}: Props) => {
    const {logoutHandler} = useLogin();

    if (user) {
        return <UserInfo user={user}/>
    }

    return (
        <div>
            <button className={styles.button} onClick={logoutHandler}>{loginType === "guest" ? "Guest" : "LogIn"}</button>
        </div>
    );
}