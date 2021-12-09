import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, HorizontalBar } from "react-chartjs-2";
import { ResponsiveSunburst } from '@nivo/sunburst'
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

const useStyles = makeStyles((theme) => ({
  title: {
    fontColor: "#1d3c89",
  },
}));

export default function TotalPieChart(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  let payData = [
    {
      id: "급여",
      value: 4800,
      color: "hsl(111, 69%, 82%)",
    },
    {
      id: "복지",
      value: 833,
      color: "hsl(220, 70%, 50%)",
    },
    {
      id: "싱여",
      value: 294,
      color: "hsl(111, 69%, 82%)",
    },
    {
      id: "복지수당",
      value: 1240,
      color: "hsl(220, 70%, 50%)",
    },
  ];

  return (
    <Box>
      <Box width="400px" height="400px" mt={3}>
        <ResponsivePie
            theme={{
              fontSize: 16,
            }}
            data={payData}
            innerRadius={0.60}
            margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
            padAngle={0.7}
            cornerRadius={3}
            colors={['#5863fc', '#f9765d', '#ffc466', '#e3e4e8']}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            enableArcLinkLabels={true}
            arcLinkLabel="value"
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: "color" }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            enableArcLinkLabels={false}
            /*
            legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 30,
                  translateY: 40,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemsSpacing: 0,
                  symbolSize: 20,
                  itemDirection: 'left-to-right'
              }
          ]}
          */ 
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
  const classes = useStyles();
  const theme = useTheme();

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "30px",
        fontWeight: "800",
      }}
    >
      <tspan x="172" dy="-1.2em" fill="#1d3c89">급여</tspan>
      <tspan x="172" dy="1.2em" fill="#1d3c89">구성비율</tspan>
      <tspan x="172" dy="2.4em" fill="#1d3c89"  
        style={{
        fontSize: "18px",
        fontWeight: "600",
      }}>[ 단위 : 만원 ]</tspan>
    </text>
  );
};
