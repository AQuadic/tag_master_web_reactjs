import { axios } from "@/lib/axios";

export const suggestions = async (data: { 
    name: string; 
    email: string; 
    phone: string; 
    title: string; 
    message: string; 
    city: string; 
    phone_country: string; 
    type: string; }) => {
    return await axios.post("/suggestions", data);
};
