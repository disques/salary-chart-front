import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import TotalPieChart from "./TotalPieChart";
import TotalLineChart from "./TotalLineChart";
import PieDesc from "./PieDesc";
import BoxTitle from "./BoxTitle";

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    left: "20px",
    top: "-35px"
  },
}));

export default function TotalPayList(props) {
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
        border={5} 
        width="1150px" 
        borderColor="#1d3c89"
        borderRadius={5}
        >
          <Box className={classes.title}>
            <BoxTitle />
          </Box>
          <Box display="flex" justifyContent="center">
            <TotalPieChart />
          </Box>
          <Box my={3} width="1000px" margin="auto">
            <Divider />
          </Box>
          <Box display="flex" justifyContent="center">
            <PieDesc />
          </Box>
          <Box my={3} width="1150px" margin="auto">
            <Divider />
          </Box>
          <Box mb={3} display="flex" justifyContent="center">
            <TotalLineChart />
          </Box>
      </Box>
    </Box>
    
  );
}

