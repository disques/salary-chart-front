import React, { useContext, useEffect, useState } from "react";
import {
  Link as RouterLink,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../AppContext";
import Header from "./Header";
import MainComponent from "./Component/MainComponent";
// import MainChart from "./Pay_Chart/MainChart";
// import Pdf_Print from "./Pay_Chart/Component_Test/Pdf_Print";
import { Box, Button, Typography, CssBaseline } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  body: {
    height: "100%",
    background: "#F5F5F5",
    display: "inline-block",
  },
  footer: {
    position: "relative",
  },
  test: {
    fontSize: "40px",
    fontFamily: "Spoqa Han Sans Neo Medium",
  },
}));

const Main = () => {
  const classes = useStyles();
  const { login, setLogin } = useContext(AppContext);
  const { userData, setUserData } = useContext(AppContext);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Box textAlign={"center"}>
        <main className={classes.body}>
          <Switch>
            <Route exact path="/chart" component={MainComponent} />
            {/* 사용안하는앤데 react-spring 라이브러리 에러나서 주석함 23.12.11 선희 */}

            {/* <Route exact path="/paychart" component={MainChart} /> */}
            {/* <Route exact path="/test" component={Pdf_Print} /> */}
          </Switch>
        </main>
      </Box>
    </React.Fragment>
  );
};
export default withRouter(Main);
