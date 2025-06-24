import Axios from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config: {
  headers: { [key: string]: string };
}) {
  const token = Cookies.get("tag-master-token");
  const language = localStorage.getItem("language") ?? "ar";
  config.headers["Accept-Language"] = language;
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
      Cookies.remove("tag-master-token");
      window.location.href = "/auth/login";
    }
    let processedError;
    if (error instanceof Error) {
      processedError = error;
    } else if (typeof error === "string") {
      processedError = new Error(error);
    } else {
      processedError = new Error(JSON.stringify(error));
    }
    return Promise.reject(processedError);
  }
);
