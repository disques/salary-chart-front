import React, { useContext, useEffect, useState } from "react";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../AppContext";
import Header from "./Header";
import MainComponent from "./Component/MainComponent";
import MainChart from "./Pay_Chart/MainChart";
import {
  Box,
  Button,
  Typography,
  CssBaseline,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  body: {
    height: "100%",
    background: "#F5F5F5",
  },
  footer: {
    position: "relative",
  },
  test: {
    fontSize: "40px",
    fontFamily: "Spoqa Han Sans Neo Medium"
  }
}));

const Main = () => {
  const classes = useStyles();
  const { login, setLogin } = useContext(AppContext);
  const { userData, setUserData } = useContext(AppContext);

  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
    <CssBaseline />
    <Header />
    <Box display="flex" justifyContent="center">
      <main className={classes.body}>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/paychart" component={MainChart} />
        </Switch>
      </main>
    </Box>
  </React.Fragment>
  );
};
export default Main;
