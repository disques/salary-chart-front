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

export default function MonthLineChart(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {
    
  };

  const indexBy = "id";
  let totalpaySum = 3000;
  let paySum = 400;

  const inputdata = [
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

  const data = [
    { [indexBy]: "급여합계" , paydata: totalpaySum },
    { [indexBy]: "기본급합계", paydata: paySum },
  ];
  
  
const TotalLabels = ({ bars, yScale }) => {
  // space between top of stacked bars and total label
  const labelMargin = 60;

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
            fontSize: "25px",
            fontWeight: "800",
          }}
        >
          {total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}만원
        </text>
      </g>
    );
  });
};

  return (
    <Box>
      <Box width="500px" height="500px" mt={3}>
        <ResponsiveBar
         theme={{
          fontSize: 16,
         }}
        data={data}
        keys={["paydata"]}
        indexBy={indexBy}
        enableLabel={false}
        colors={['#5863fc']}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        axisLeft={null}
        // add TotalLabels after bars
        layers={["axes", "bars", TotalLabels, "markers", "legends"]}
        />
      </Box>
    </Box>
    
  );
}


