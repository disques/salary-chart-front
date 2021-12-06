import React, {
  useState,
  useContext,
  useEffect,
} from "react";
import {
  Box,
  Button,
  Typography,
  AppBar,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../AppContext";


const useStyles = makeStyles((theme) => ({
  
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  return (
    <React.Fragment>
      <AppBar position="relative" className={classes.customizeToolbar}>
        <Box display="flex" justifyContent="center">
          <Box 
            align="center" 
            my={2} 
            fontSize="18px"
            color="white"
            fontWeight="700">
            안성호님의 급여내역 한눈에 보기!
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}

