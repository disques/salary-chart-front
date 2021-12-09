import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, HorizontalBar } from "react-chartjs-2";
import { ResponsiveSunburst } from '@nivo/sunburst'
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";


const useStyles = makeStyles((theme) => ({
  
}));

export default function TotalLineChart(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  const indexBy = "id";

  const data = [
    { [indexBy]: "2021.01" , 급여: 500, 복지: 40, 상여: null, 복지수당: 80 },
    { [indexBy]: "2021.02", 급여: 500, 복지: 30, 상여: null, 복지수당: 83 },
    { [indexBy]: "2021.03", 급여: 500, 복지: 20, 상여: null, 복지수당: 50 },
    { [indexBy]: "2021.04", 급여: 500, 복지: 50, 상여: null, 복지수당: 70 },
    { [indexBy]: "2021.05" , 급여: 500, 복지: 30, 상여: 50, 복지수당: 60 },
    { [indexBy]: "2021.06", 급여: 500, 복지: 20, 상여: 50, 복지수당: 80 },
    { [indexBy]: "2021.07", 급여: 500, 복지: 30, 상여: 50, 복지수당: 80 },
    { [indexBy]: "2021.08", 급여: 500, 복지: 20, 상여: 50, 복지수당: 70 },
    { [indexBy]: "2021.09" , 급여: 500, 복지: 40, 상여: 50, 복지수당: 60 },
    { [indexBy]: "2021.10", 급여: 500, 복지: 24, 상여: 50, 복지수당: 50 },
    { [indexBy]: "2021.11", 급여: 500, 복지: 40, 상여: 50, 복지수당: 80 },
    { [indexBy]: "2021.12", 급여: 500, 복지: 40, 상여: 50, 복지수당: 80 },
  ];
  
  
const TotalLabels = ({ bars, yScale }) => {
  // space between top of stacked bars and total label
  const labelMargin = 40;

  return bars.map(({ data: { data, indexValue }, x, width }, i) => {
    // sum of all the bar values in a stacked bar
    const total = Object.keys(data)
      //f ilter out whatever your indexBy value is
      .filter(key => key !== indexBy)
      .reduce((a, key) => a + data[key], 0);

    return (
      <g
        transform={`translate(${x}, ${yScale(total) - labelMargin})`}
        key={`${indexValue}-${i}`}
      >
        <text
          // add any class to the label here
          className="bar-total-label"
          x={width / 2}
          y={labelMargin / 2}
          textAnchor="middle"
          alignmentBaseline="central"
          // add any style to the label here
          style={{
            fill: "#1d3c89",
            fontSize: "14px",
          }}
        >
          {total}0000 원
        </text>
      </g>
    );
  });
};

  return (
    <Box>
      <Box width="1150px" height="500px" mt={20}>
        <ResponsiveBar
         theme={{
          fontSize: 16,
         }}
          data={data}
          keys={["급여", "복지", "상여", "복지수당"]}
          colors={['#5863fc', '#f9765d', '#ffc466', '#e3e4e8']}
          indexBy={indexBy}
          margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
          padding={0.4}
          axisLeft={null}
          // add TotalLabels after bars
          layers={["axes", "bars", TotalLabels, "markers", "legends"]}
        />
      </Box>
    </Box>
    
  );
}


