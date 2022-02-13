import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { ILoginUser, IRegisterUser, IResetPassword } from "./auth.types";
import { IUser } from "common/types";
import { server } from "common/utils";

interface IUserContext {
  isLoggedIn: boolean;
  logout: () => Promise<void>;
  login: (data: ILoginUser) => Promise<IUser>;
  register: (data: IRegisterUser) => Promise<IUser>;
  user: IUser;
  forgotPassword: (email: string) => Promise<string>;
  resetPassword: (data: IResetPassword) => Promise<boolean>;
}

const emptyUser: IUser = {
  id: "",
  bio: {},
  email: "",
  given_name: "",
  family_name: "",
  username: "",
};
export const UserContext = createContext<IUserContext>({
  isLoggedIn: false,
  logout: async () => {},
  login: async (_: ILoginUser) => emptyUser,
  register: async (_: IRegisterUser) => emptyUser,
  forgotPassword: async (email: string) => email,
  resetPassword: async (_: IResetPassword) => false,
  user: emptyUser,
});
export const userCurrentUser = () => useContext(UserContext);

interface IUserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState(emptyUser);

  useEffect(() => {
    if (!user.id) {
      server
        .GET<IUser>("/me")
        .then(setUser)
        .catch(() => setUser(emptyUser));
    }
  }, []);

  const login = async (data: ILoginUser) => {
    const user = await server.POST<IUser>("/login", data);
    setUser(user);
    return user;
  };
  const logout = async () => {
    await server.GET('/logout')
    setUser(emptyUser);
  };
  const register = async (data: IRegisterUser) => {
    const user = await server.POST<IUser>("/signup", data);
    setUser(user);
    return user;
  };
  const forgotPassword = async (email: string) =>
    server.POST<string>("/forgot-password", { email });
  const resetPassword = async (data: IResetPassword) => {
    await server.POST<boolean>("/reset-password", data);
    return true;
  };

  const checkoutContextValues = {
    forgotPassword,
    isLoggedIn: !!user.id,
    login,
    logout,
    register,
    resetPassword,
    user,
  };
  return (
    <UserContext.Provider value={checkoutContextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
