import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-toastify/dist/ReactToastify.css";

import { useTheme, makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { AppContextProvider } from "./AppContext";

import "./App.css";
import Main from "./View/Main";
import queryString from "querystring";
import { asyncAPI } from "./Common/Common";
import ErrorPage from "./View/ErrorPage";
import CheckPage from "./View/Check";

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
      <CssBaseline />
      {/*{login ? <Main /> : <ErrorPage />}*/}
      <Route path="/" component={CheckPage} />
      <Route path="/chart" component={Main} />
      <Route path="/fail" component={ErrorPage} />
    </AppContextProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App location={location} />
  </BrowserRouter>,

  document.getElementById("root")
);
