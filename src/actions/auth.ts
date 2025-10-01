'use server'

import {cookies} from "next/headers";
import {userService} from "@/api/user.service";
import {redirect} from "next/navigation";

export async function loginUserAction( username: string, password: string) {
    const cookieStore = await cookies();

    const user = await userService.userLogin(username, password);

    cookieStore.set("loginType", "user", {httpOnly: true, maxAge: 60 * 60, path: "/", secure: process.env.NODE_ENV === "production"});
    cookieStore.set("userId", JSON.stringify(user.id), {httpOnly: true, maxAge: 60 * 60, path: "/", secure: process.env.NODE_ENV === "production"});
    redirect("/movies");
}

export async function logoutUserAction() {
    const cookieStore = await cookies()
    cookieStore.delete("userId")
    cookieStore.delete("loginType")
    redirect("/login");
}

export async function loginGuestAction() {
    const cookieStore = await cookies();

    cookieStore.set("userId", "", { httpOnly: true, maxAge: 0, path: "/", secure: process.env.NODE_ENV === "production" })
    cookieStore.set("loginType", "guest", {httpOnly: true, maxAge: 60 * 60, path: "/", secure: process.env.NODE_ENV === "production",})
    redirect("/movies");
}