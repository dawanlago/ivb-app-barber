import React, { createContext, useContext, useState } from 'react';

type UserProps = {
  children: React.ReactNode;
};

interface UserSelected {
  id: string;
  name: string;
  password: string;
  token: string;
}

interface UserContextData {
  user: UserSelected;
  setUser: React.Dispatch<React.SetStateAction<UserSelected>>;
}

export const UserContext = createContext({} as UserContextData);

const UserProvider = (props: UserProps) => {
  const [user, setUser] = useState<UserSelected>({
    id: '',
    name: '',
    password: '',
    token: '',
  } as UserSelected);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUser };
