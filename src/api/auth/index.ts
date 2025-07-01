// src/api/auth/index.ts
import { axios } from "@/lib/axios";

export interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export const postSignIn = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<LoginResponse> => {
    const response = await axios.post('/user/login', {
        email,
        password,
        password_confirmation: password, 
    });

    return response.data;
};
