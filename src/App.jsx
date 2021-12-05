import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-toastify/dist/ReactToastify.css";

import { AppContextProvider } from "./AppContext";

const App = (props) => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {});
  return (
    <AppContextProvider
      login={login}
      setLogin={setLogin}
      userData={userData}
      setUserData={setUserData}
    >
      <ToastContainer />
      <HeaderProvider>
        <TemplateProvider>
          <Route path={["/main", "/"]} component={Main} exact={true} />
        </TemplateProvider>
      </HeaderProvider>
    </AppContextProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App location={location} />
  </BrowserRouter>,

  document.getElementById("root")
);
