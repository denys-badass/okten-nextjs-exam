import {useRouter} from "next/navigation";
import {addToast} from "@heroui/toast";
import {loginGuestAction, loginUserAction, logoutUserAction} from "@/actions/auth";

export const useLogin = () => {
    const router = useRouter();

    const loginHandler = async (data: {username: string, password: string}) => {
        const {username, password} = data;
        try {
            await loginUserAction(username, password)
            router.push('/movies');
        } catch (e) {
            console.error(e instanceof Error ? e.message : 'Unknown error');
            addToast({
                title: 'Failed to log in. Wrong username or password.',
                description: 'Please try again.',
                color: 'danger',
            })
            return e;
        }
    }

    const loginGuest = async () => {
        await loginGuestAction();

        router.push('/movies');
    }

    const logoutHandler = async () => {
        await logoutUserAction();
        router.push('/login');
    }

    return {
        loginHandler,
        loginGuest,
        logoutHandler,
    }
}