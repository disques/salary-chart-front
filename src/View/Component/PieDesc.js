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
  const { titleYear } = props;
  const { totalPay } = props;

  const handleClick = (event) => {
    
  };

    function formatNumber(number) {
        const parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

  return (
    <Box>
      <Box
        display="flex" justifyContent="center"
        fontSize="25px"
        color="#1d3c89"
      >
          <div>
              {titleYear} <strong>총지급액 합계</strong> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <strong>{formatNumber(totalPay)} 원</strong>
          </div>
      </Box>
    </Box>
    
  );
}

