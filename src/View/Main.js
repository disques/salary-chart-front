import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../AppContext";

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
}));

const Main = () => {
  const classes = useStyles();
  const { login, setLogin } = useContext(AppContext);
  const { userData, setUserData } = useContext(AppContext);

  useEffect(() => {

  }, []);

  return (
    <>

    </>
  );
};
export default Main;
