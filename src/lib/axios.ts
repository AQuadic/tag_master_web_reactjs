import Axios from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config: {
  headers: { [key: string]: string };
}) {
  const token = Cookies.get("cloudwa-token");

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = "application/json";


  return config;
}

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor as never);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !window.location.href.includes("auth/login")
    ) {
      Cookies.remove("cloudwa-token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);
