import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";


const useStyles = makeStyles((theme) => ({
  
}));

export default function MonthPayList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  return (
    <Box>
      <Box
        mt={4} 
        display="flex" 
        justifyContent="center" 
        border={3} 
        width="1150px" 
        borderColor="blue"
        borderRadius={5}
        >
        <Box>
          메인데이터2
        </Box>
      </Box>
    </Box>
    
  );
}

