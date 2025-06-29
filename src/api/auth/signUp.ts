// file: @/api/user/postSignUp.ts

import axios from "axios";

export interface SignUpResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export const postSignUp = async ({
  name,
  phone,
  phone_country,
  email,
  password,
}: {
  name: string;
  phone: string;
  phone_country: string;
  email: string;
  password: string;
}): Promise<SignUpResponse> => {
  const response = await axios.post("https://tag-master.aquadic.com/api/user/signup", {
    name,
    phone,
    phone_country,
    email,
    password,
    password_confirmation: password,
  });

  return response.data;
};
