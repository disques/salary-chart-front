import React, { createContext } from "react";
const AppContext = createContext({});
/*
  전역 컨텍스트 프로바이더
 */
const AppContextProvider = ({
  children,
  login,
  setLogin,
  userData,
  setUserData,
}) => {
  return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
