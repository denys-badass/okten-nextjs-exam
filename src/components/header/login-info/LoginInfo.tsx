import {IUser} from "@/models/IUser";
import {UserInfo} from "@/components/header/login-info/user/UserInfo";
import {logoutUserAction} from "@/actions/auth";

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
            <button onClick={logoutUserAction}>{loginType === "guest" ? "Guest" : "LogIn"}</button>
        </div>
    );
}