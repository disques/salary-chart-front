import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  
}));

export default function Title(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const handleClick = (event) => {
    
  };

  return (
    <Box 
      border={5}
      borderColor="white" 
      height="60px" 
      width="300px" 
      bgcolor="#7a4a7a"
      display="flex"
      justifyContent="center"
      pt="10px"
      >
      <Box color="white" fontSize="24px" fontWeight="900">
        {props.title}
      </Box>
    </Box>
    
  );
}

