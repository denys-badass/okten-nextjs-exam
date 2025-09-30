import {cookies} from "next/headers";
import {userService} from "@/api/user.service";
import {IUser} from "@/models/IUser";

export const getUser = async () : Promise<IUser | null> => {
    const cookiesStore = await cookies();
    const userId = cookiesStore.get('userId')?.value;
    if (!userId) return null;

    return await userService.getUserById(Number(userId));
}