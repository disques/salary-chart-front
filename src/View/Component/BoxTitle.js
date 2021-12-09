import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";


const useStyles = makeStyles((theme) => ({
  
}));

export default function BoxTitle(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  return (
    <Box 
      border={5}
      borderColor="white" 
      height="60px" 
      width="300px" 
      bgcolor="#1d3c89"
      display="flex"
      justifyContent="center"
      pt="10px"
      >
      <Box color="white" fontSize="24px" fontWeight="900">
        급여 내역 한눈에 보기!
      </Box>
    </Box>
    
  );
}

