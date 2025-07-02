import { axios } from "@/lib/axios";

interface UpdateUserPayload {
  name?: string;
  email?: string;
  phone?: string;
  phone_country?: string;
}

export const updateUser = async (payload: UpdateUserPayload) => {

  const response = await axios.post("/user/update", payload, {
  });

  return response.data;
};
