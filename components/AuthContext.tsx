import { createContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  is_admin: boolean;
}

interface AuthContextValue {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  is_admin: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  user: { username: '', is_admin: false },
  setUser: () => {},
  is_admin: false,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ username: '', is_admin: false }); // State to hold logged-in user data

  //const isAdmin = user && user.is_admin;

  return (
    <AuthContext.Provider value={{ user, setUser , is_admin: user && user.is_admin}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

