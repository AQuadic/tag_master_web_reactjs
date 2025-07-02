import { axios } from "@/lib/axios";

export const logOut = async () => {
    const response = await axios.post(`/user/logout`, {
    });
    return response.data;
};
