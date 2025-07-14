import { axios } from "@/lib/axios";

interface UpdateUserPayload {
  name?: string;
  email?: string;
  phone?: string;
  phone_country?: string;
  profile_image?: File;
}

export const updateUser = async (payload: UpdateUserPayload) => {
  const formData = new FormData();

  // Add text fields to FormData only if they exist
  if (payload.name !== undefined) formData.append("name", payload.name);
  if (payload.email !== undefined) formData.append("email", payload.email);
  if (payload.phone !== undefined) formData.append("phone", payload.phone);
  if (payload.phone_country !== undefined)
    formData.append("phone_country", payload.phone_country);
  if (payload.profile_image) formData.append("image", payload.profile_image);

  const response = await axios.post("/user/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
