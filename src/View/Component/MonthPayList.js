import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import MonthLineChart from "./MonthLineChart";
import MonthPayPieChart from "./MonthPayPieChart";
import MonthTotalLineChart from "./MonthTotalLineChart";
import BoxTitle from "./BoxTitle";
import SubTitle from "./SubTitle";
import Legend from "./Legend";

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    left: "20px",
    top: "-35px"
  },

  selectListBox: {
    position: 'relative',
    left: "-1px",
    top: "-10px",
  },

  legendBox: {
    position: 'relative',
    left: "30px",
    top: "20px",
  },

  chartBox: {
    position: 'relative',
    left: "0px",
    top: "-150px",
  },

  boxdivider: {
    position: 'relative',
    top: "-100px",
    border: "none",
    borderTop: "1px dotted #1d3c89",
    backgroundColor: "#fff",
    backgroundSize: "22px",
    height: "1px",
    width: "100%",
  },

  SubTitleBox: {
    position: 'relative',
    left: "-1px",
    top: "-60px",
  },

  dividerPie: {
    position: 'relative',
    top: "-200px",
    borderTop: "1px",
    background: "#1d3c89",
    height: "1px",
  },

  dividerLine: {
    position: 'relative',
    top: "-100px",
    borderTop: "1px",
    background: "#1d3c89",
    height: "1px",
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
        my={8} 
        justifyContent="center" 
        border={5} 
        width="1150px" 
        borderColor="#1d3c89"
        borderRadius={5}
        >
        <Box className={classes.title}>
          <BoxTitle />
        </Box>
        <Box className={classes.selectListBox}>
          <SubTitle kind="select"/>
        </Box>
        <Box className={classes.legendBox}>
          <Legend />
        </Box>
        <Box display="flex" justifyContent="center" className={classes.chartBox}>
            <MonthLineChart />
            <MonthPayPieChart />
        </Box>
        <Box width="1000px" margin="auto">
            <Divider className={classes.dividerPie}/>
        </Box>
        <Box className={classes.boxdivider}> </Box>
        <Box className={classes.SubTitleBox}>
          <SubTitle kind="text" yearTitle="2021"/>
        </Box>
        <Box display="flex" justifyContent="center">
            <MonthTotalLineChart />
        </Box>
        <Box width="1000px" margin="auto">
            <Divider className={classes.dividerLine}/>
        </Box>
        <Box display="flex" justifyContent="center">
          <Legend data="true" />
        </Box>
      </Box>
    </Box>
    
  );
}

