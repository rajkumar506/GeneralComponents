import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
} from "react";
type AuthProviderProps = {
  isSigned?: boolean;
  children: ReactNode;
};
type Authtype = {
  isSigned?: boolean;
};
export const AuthContext = createContext<Authtype | undefined>(undefined);
export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  isSigned,
}) => {
  return (
    <AuthContext.Provider value={{ isSigned }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  let context = useContext(AuthContext);
  if (!context) {
    return "not signed in";
  } else {
    return context;
  }
};
