import {IUser} from "@/models/IUser";
import {UserInfo} from "@/components/header/login-info/user/UserInfo";
import Link from "next/link";

type Props = {
    user: IUser | null;
    loginType: "guest" | "user" | null;
}

export const LoginInfo = ({user, loginType}: Props) => {
    if (user) {
        return <UserInfo user={user}/>
    }

    return (
        <div>
            <Link href="/login" >{loginType === "guest" ? "Guest" : "LogIn"}</Link>
        </div>
    );
}