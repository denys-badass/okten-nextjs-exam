import {cookies} from "next/headers";

export const getLoginType = async () : Promise<"user" | "guest" | null> => {
    const cookiesStore = await cookies();
    const loginType = cookiesStore.get("loginType")?.value;

    if (!loginType) return null;

    return loginType as "user" | "guest";
}