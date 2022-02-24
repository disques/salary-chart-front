import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, AppBar } from "@material-ui/core";
import { Link as RouterLink, useHistory, withRouter } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../AppContext";

const useStyles = makeStyles((theme) => ({
  abRoot: {
    backgroundColor: "#1d3c89",
  },
}));

const ErrorPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {};
  // console.log("error page!" + sStorage.name + "," + sStorage.sabun);

  return (
    <Box align="center" my={4} fontSize="35px" color="black" fontWeight="700">
      잘못된 접근입니다
    </Box>
  );
};
export default withRouter(ErrorPage);
