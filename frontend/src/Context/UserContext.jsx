import React, { createContext, useEffect, useState } from "react";
import tokenService from "../server/token.service";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => tokenService.getUser());
  const login = (user) => {
    setUserInfo(user);
  };

  const logout = () => {
    setUserInfo(null);
    tokenService.removeUser();
  };

  function getUser() {
    const savedUser = tokenService.getUser() || null;
    return savedUser;
  }

  useEffect(() => {
    if (userInfo) {
      tokenService.setUser(userInfo);
    } else {
      tokenService.removeUser();
    }
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
