import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

import { ResponsivePie } from "@nivo/pie";


const useStyles = makeStyles((theme) => ({
  
}));

export default function MonthPayPieChart(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  let payData = [
    {
      id: "급여",
      value: 850,
      color: "hsl(111, 69%, 82%)",
    },
    {
      id: "복지",
      value: 76,
      color: "hsl(220, 70%, 50%)",
    },
    {
      id: "상여",
      value: 30,
      color: "hsl(111, 69%, 82%)",
    },
    {
      id: "연장수당",
      value: 131,
      color: "hsl(220, 70%, 50%)",
    },
  ];

  return (
    <Box>
      <Box width="400px" height="400px" mt={6}>
        <ResponsivePie
            data={payData}
            innerRadius={0.60}
            margin={{ top: 20, right: 30, bottom: 30, left: 20 }}
            padAngle={0.7}
            cornerRadius={3}
            colors={['#5863fc', '#f9765d', '#ffc466', '#e3e4e8']}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: "color" }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            enableArcLinkLabels={false}
          layers={[
            'arcs',
            'arcLabels',
            'arcLinkLabels',
            'legends',
            CenteredMetric,
          ]}
          />
      </Box>
    </Box>
    
  );
}


const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "30px",
        fontWeight: "600"
      }}
    >
      <tspan x="172" dy="-1.2em">급여</tspan>
      <tspan x="172" dy="1.2em">구성비율</tspan>
      <tspan x="172" dy="2.4em"  
        style={{
        fontSize: "12px",
        fontWeight: "600"
      }}>2021.01 ~ 현재까지</tspan>
      <tspan x="172" dy="2.4em"  
        style={{
        fontSize: "15px",
        fontWeight: "600"
      }}>[ 단위 : 만원 ]</tspan>
    </text>
  );
};
