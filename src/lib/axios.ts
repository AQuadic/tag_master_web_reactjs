import Axios from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config: {
  headers: { [key: string]: string };
}) {
  // Check if we're in browser environment
  const isBrowser = typeof window !== "undefined";

  let token: string | undefined;
  let language: string;

  if (isBrowser) {
    // Browser environment - use js-cookie
    token = Cookies.get("tag-master-token");
    language = Cookies.get("language") ?? "ar";
  } else {
    // SSR environment - extract from request headers if available
    const cookieHeader = config.headers.cookie;
    if (cookieHeader) {
      // Parse cookie header manually
      const cookies = cookieHeader
        .split(";")
        .reduce((acc: { [key: string]: string }, cookie: string) => {
          const [key, value] = cookie.trim().split("=");
          if (key && value) {
            acc[key] = decodeURIComponent(value);
          }
          return acc;
        }, {});

      token = cookies["tag-master-token"];
      language = cookies["language"] ?? "ar";
    } else {
      language = "ar";
    }
  }

  config.headers["Accept-Language"] = language;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = "application/json";

  return config;
}

// Get the base URL with fallback
const getBaseURL = () => {
  // Try environment variable first
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (envUrl) {
    return envUrl;
  }

  // Fallback for development and production
  return "https://tag-master.aquadic.com/api";
};

export const axios = Axios.create({
  baseURL: getBaseURL(),
});

axios.interceptors.request.use(authRequestInterceptor as never);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Only handle client-side redirects
    if (
      typeof window !== "undefined" &&
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
