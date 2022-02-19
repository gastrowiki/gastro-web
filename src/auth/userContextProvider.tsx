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
  isLoggedIn: true,
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(emptyUser);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await server.GET<IUser>("/me");
      setIsLoggedIn(true);
      setUser(user);
    } catch {
      setUser(emptyUser);
      setIsLoggedIn(false);
    }
  };
  const login = async (data: ILoginUser) => {
    const user = await server.POST<IUser>("/login", data);
    setUser(user);
    setIsLoggedIn(true);
    return user;
  };
  const logout = async () => {
    await server.GET("/logout");
    setUser(emptyUser);
    setIsLoggedIn(false);
  };
  const register = async (data: IRegisterUser) => {
    const user = await server.POST<IUser>("/signup", data);
    setUser(user);
    setIsLoggedIn(true);
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
    isLoggedIn,
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
