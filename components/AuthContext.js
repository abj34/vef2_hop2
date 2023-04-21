import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: '', is_admin: false }); // State to hold logged-in user data

  const isAdmin = user && user.is_admin;
  return (
    <AuthContext.Provider value={{ user, setUser , is_admin: user && user.is_admin}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
