import axios from "axios";
import { createContext, useContext } from "react";

import { api } from "@/api";
import type { Auth, AuthProviderProps } from "@/types/auth";

const AuthContext = createContext({} as Auth);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const signIn = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_SPOTIFY_TOKEN_BASE_URL}/token`,
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization:
            "Basic " +
            btoa(
              import.meta.env.VITE_SPOTIFY_CLIENT_ID +
                ":" +
                import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
            ),
        },
      }
    );

    const token = response.data.access_token;
    const tokenType = response.data.token_type;

    if (token) {
      localStorage.setItem("@Spotify:token", token);

      api.defaults.headers.common.Authorization = `${tokenType} ${token}`;
    }
  };

  return <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado como children de AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
