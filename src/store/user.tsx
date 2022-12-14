import React, {createContext, useContext, useState, Dispatch} from 'react';
import IUser from '../models/User';

type UserProps = {
  children: React.ReactNode;
};

interface UserContextData {
  userSelected: IUser;
  setUserSelected: Dispatch<React.SetStateAction<IUser>>;
}

export const UserContext = createContext({} as UserContextData);

function UserProvider(props: UserProps) {
  const [userSelected, setUserSelected] = useState<IUser>({} as IUser);

  return (
    <UserContext.Provider
      value={{
        userSelected,
        setUserSelected,
      }}>
      {props.children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export {UserProvider, useUser};
