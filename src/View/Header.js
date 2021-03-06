import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, AppBar } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../AppContext";

const useStyles = makeStyles((theme) => ({
  abRoot: {
    backgroundColor: "#1d3c89",
    minWidth: "1150px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {};

  return (
    <React.Fragment>
      <AppBar
        position="relative"
        classes={{
          root: classes.abRoot,
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box
            align="center"
            my={4}
            fontSize="35px"
            color="white"
            fontWeight="700"
          >
            {sStorage.name}님의 급여내역 한눈에 보기!
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}
