import { type ReactElement } from "react";

import { AuthProvider } from "./Auth";

interface AppProviderProps {
  children: ReactElement;
}

function AppProvider({ children }: AppProviderProps): ReactElement {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
