import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import TotalPayList from "./TotalPayList";
import MonthPayList from "./MonthPayList";

const useStyles = makeStyles((theme) => ({
  
}));

export default function MainComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  return (
    <Box>
     <TotalPayList />
     <MonthPayList />
    </Box>
  );
}

