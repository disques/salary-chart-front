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

const App = (props) => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const getPerData = async (key) => {
    try {
      const data = await asyncAPI("jan", "HtmPearlAPI", "PerData", {
        HtmKey: key,
      }).catch((e) => {
        throw Error(`${e}`);
      });
      if (data.result != null) {
        sStorage.setItem("login", "false");
        sStorage.setItem("zone", "");
        sStorage.setItem("sabun", "");
        sStorage.setItem("name", "");
        setLogin(false);
        alert("로그인 정보가 잘못되었습니다.");
      } else {
        sStorage.setItem("login", "true");
        sStorage.setItem("zone", data.zone);
        sStorage.setItem("sabun", data.sabun);
        sStorage.setItem("name", data.name);
        setLogin(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const parameter = props.location.search.replace("?", "");
    const query = queryString.parse(parameter);
    getPerData(query.key);
  });
  return (
    <AppContextProvider
      login={login}
      setLogin={setLogin}
      userData={userData}
      setUserData={setUserData}
    >
      <CssBaseline />
      {login ? <Main /> : <ErrorPage />}
    </AppContextProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App location={location} />
  </BrowserRouter>,

  document.getElementById("root")
);
