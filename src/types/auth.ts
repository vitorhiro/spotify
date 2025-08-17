import type { ReactNode } from "react";

export interface Auth {
  signIn: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
