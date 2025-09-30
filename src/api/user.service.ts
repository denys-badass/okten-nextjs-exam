import {IUser} from "@/models/IUser";

const loginEndpoint = 'https://dummyjson.com/auth/login';
const userEndpoint = 'https://dummyjson.com/users';

export const userService = {
    userLogin: async (username: string, password: string): Promise<IUser> => {
        return await fetch(loginEndpoint, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error('Failed to log in' + res.statusText);
            }
            return res.json();
        });
    },
    getUserById: async (id: number): Promise<IUser> => {
        return await fetch(`${userEndpoint}/${id}`).then(res => res.json());
    }
};