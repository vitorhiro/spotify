import axios, { AxiosError } from "axios";

import { toast } from "sonner";

const api = axios.create({
  baseURL: import.meta.env.VITE_SPOTIFY_BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      toast("Atenção", {
        description: "Seu acesso expirou. Será necessário realizar um novo login.",
      });

      const AutoLogout = () => {
        localStorage.removeItem("@Spotify:token");

        const location = window.location.pathname;
        localStorage.setItem("@Spotify:navigation_history", location);
        window.location.assign("/");
      };

      setTimeout(() => AutoLogout(), 3000);
    }

    return await Promise.reject(error);
  }
);

export { api };
