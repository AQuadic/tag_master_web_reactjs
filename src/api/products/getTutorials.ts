import { axios } from "@/lib/axios";

export const getTutorials = async () => {
    const response = await axios.get(`/tutorials`);
    return response.data.tutorials; 
};
