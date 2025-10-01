'use server'

import {cookies} from "next/headers";
import {userService} from "@/api/user.service";
import {revalidatePath} from "next/cache";

export async function loginUserAction( username: string, password: string) {
    const cookieStore = await cookies();

    const user = await userService.userLogin(username, password);

    cookieStore.set("loginType", "user", {httpOnly: true, maxAge: 60 * 60, path: "/"});
    cookieStore.set("userId", JSON.stringify(user.id), {httpOnly: true, maxAge: 60 * 60, path: "/"});
    revalidatePath("/movies");
}

export async function logoutUserAction() {
    const cookieStore = await cookies()
    cookieStore.set("userId", "", { httpOnly: true, maxAge: 0, path: "/" })
    cookieStore.set("loginType", "", { httpOnly: true, maxAge: 0, path: "/" })
    revalidatePath("/login");
}

export async function loginGuestAction() {
    const cookieStore = await cookies();

    cookieStore.set("userId", "", { httpOnly: true, maxAge: 0, path: "/" })
    cookieStore.set("loginType", "guest", {httpOnly: true, maxAge: 60 * 60, path: "/"})
    revalidatePath("/movies");
}