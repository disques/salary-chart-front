import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import MonthLineChart from "./MonthLineChart";
import MonthPayPieChart from "./MonthPayPieChart";
import MonthTotalLineChart from "./MonthTotalLineChart";
import BoxTitle from "./BoxTitle";

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    left: "20px",
    top: "-35px"
  },
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
        mt={8} 
        justifyContent="center" 
        border={5} 
        width="1150px" 
        borderColor="#1d3c89"
        borderRadius={5}
        >
        <Box className={classes.title}>
          <BoxTitle />
        </Box>
        <Box display="flex" justifyContent="center">
            <MonthLineChart />
            <MonthPayPieChart />
        </Box>
        <Box display="flex" justifyContent="center">
            <MonthTotalLineChart />
        </Box>
      </Box>
    </Box>
    
  );
}

