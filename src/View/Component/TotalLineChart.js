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
    { [indexBy]: "2021.01" , 급여: 300, 복지: 400, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.02", 급여: 300, 복지: 300, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.03", 급여: 300, 복지: 200, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.04", 급여: 300, 복지: 500, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.05" , 급여: 300, 복지: 300, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.06", 급여: 300, 복지: 200, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.07", 급여: 300, 복지: 300, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.08", 급여: 300, 복지: 200, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.09" , 급여: 300, 복지: 400, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.10", 급여: 300, 복지: 240, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.11", 급여: 300, 복지: 400, 상여: 500, 복지수당: 500 },
    { [indexBy]: "2021.12", 급여: 300, 복지: 400, 상여: 500, 복지수당: 500 },
  ];
  
  
const TotalLabels = ({ bars, yScale }) => {
  // space between top of stacked bars and total label
  const labelMargin = 20;

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
            fill: "rgb(51, 51, 51)"
          }}
        >
          {total}
        </text>
      </g>
    );
  });
};

  return (
    <Box>
      <Box width="1150px" height="500px" mt={3}>
        <ResponsiveBar
        data={data}
        keys={["급여", "복지", "상여", "복지수당"]}
        indexBy={indexBy}
        margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
        padding={0.3}
        // add TotalLabels after bars
        layers={["grid", "axes", "bars", TotalLabels, "markers", "legends"]}
        />
      </Box>
    </Box>
    
  );
}


