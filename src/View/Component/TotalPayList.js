import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import TotalPieChart from "./TotalPieChart";
import TotalLineChart from "./TotalLineChart";
import PieDesc from "./PieDesc";
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
    top: "-5px",
  },

  SubTitleBox: {
    position: 'relative',
    left: "-1px",
    top: "40px",
  },

  divider: {
    borderTop: "1px",
    background: "#1d3c89",
    height: "1px",
  },
  
  boxdivider: {
    border: "none",
    borderTop: "1px dotted #1d3c89",
    backgroundColor: "#fff",
    backgroundSize: "22px",
    height: "1px",
    width: "100%",
  }
}));

export default function TotalPayList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);
  
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
          <Box className={classes.selectListBox}>
            <SubTitle />
          </Box>
          <Box display="flex" justifyContent="center">
            <TotalPieChart />
          </Box>
          <Box mt={3} width="1000px" margin="auto">
            <Divider className={classes.divider}/>
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <PieDesc />
          </Box>
          <Box mt={5} className={classes.boxdivider}> </Box>
          <Box className={classes.SubTitleBox}>
            <SubTitle />
          </Box>
          <Box mb={3} display="flex" justifyContent="center">
            <TotalLineChart />
          </Box>
          <Box display="flex" justifyContent="center">
            <Legend data="true" />
          </Box>
      </Box>
    </Box>
    
  );
}

