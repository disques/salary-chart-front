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

  let totalpaySum = 0; 
  let totalPay = 0; //급여
  let totalBokji = 0; //복지
  let totalSangyeo = 0; //상여
  let totalSudang = 0; //복지수당

  props.data.map((data)=> {
    totalPay = totalPay + data.급여;
    totalBokji = totalBokji + data.복지;
    totalSangyeo = totalSangyeo + data.상여;
    totalSudang = totalSudang + data.복지수당;
  })

  totalpaySum = totalPay + totalBokji + totalSangyeo + totalSudang

  const data = [
    { id: "급여합계" , paydata: totalpaySum },
    { id: "기본급합계", paydata: totalPay },
  ];
  
const TotalLabels = ({ bars, yScale }) => {
  // space between top of stacked bars and total label
  const labelMargin = 60;

  return bars.map(({ data: { data, indexValue }, x, width }, i) => {
    // sum of all the bar values in a stacked bar
    const total = Object.keys(data)
      //f ilter out whatever your indexBy value is
      .filter(key => key !== "id")
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
        indexBy="id"
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


