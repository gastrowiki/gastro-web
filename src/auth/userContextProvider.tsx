import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import Cookies from 'js-cookie';

import { ILoginUser, IRegisterUser } from './auth.types'
import { IUser } from "common/types";
import { server } from 'common/utils'

interface IUserContext {
  isLoggedIn: boolean;
  logout: () => void;
  login: (data: ILoginUser) => Promise<IUser>;
  register: (data: IRegisterUser) => Promise<IUser>;
  user?: IUser;
}

const exampleUser: IUser = {
  id: '1',
  bio: {},
  email: '',
  given_name: '',
  family_name: '',
  username: '',
};
export const UserContext = createContext<IUserContext>({
  isLoggedIn: false,
  logout: () => {},
  login: async (_: ILoginUser) => exampleUser,
  register: async (_: IRegisterUser) => exampleUser,
});
export const userCurrentUser = () => useContext(UserContext);

interface IUserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser>();

  const login = async (data: ILoginUser) => {
    const user = await server.POST<IUser>('/login', data);
    setUser(user);
    return user;
  };
  const logout = () => {
    setUser(undefined);
    Cookies.remove('token');
  };
  const register = async (data: IRegisterUser) => {
    const user = await server.POST<IUser>('/signup', data);
    setUser(user)
    return user;
  };

  const checkoutContextValues = {
    isLoggedIn: !!user,
    login,
    logout,
    register,
    user,
  };
  return (
    <UserContext.Provider value={checkoutContextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
