import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";


const useStyles = makeStyles((theme) => ({
  
}));

export default function PieDesc(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  return (
    <Box>
      <Box
        display="flex" justifyContent="center"
        fontSize="16px"
        color="#1d3c89"
      >
        2020
      </Box>
      <Box
        fontSize="18px"
        color="#1d3c89"
        fontWeight="bold"
      >
        총지급액 합계
      </Box>
    </Box>
    
  );
}

