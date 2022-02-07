import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

import { ResponsivePie } from "@nivo/pie";

const useStyles = makeStyles((theme) => ({}));

export default function MonthPayPieChart(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  let totalPay = 0; //급여
  let totalBokji = 0; //복지
  let totalSangyeo = 0; //상여
  let totalSudang = 0; //복지수당
  let startMm = props.data[0].id; //해당년도의 가장 첫번째 월

  props.data.map((data) => {
    totalPay = totalPay + data.급여;
    totalBokji = totalBokji + data.복지;
    totalSangyeo = totalSangyeo + data.상여;
    totalSudang = totalSudang + data.복지수당;
  });

  let payData = [
    {
      id: "급여",
      value: totalPay,
      date: startMm,
    },
    {
      id: "복지",
      value: totalBokji,
    },
    {
      id: "싱여",
      value: totalSangyeo,
    },
    {
      id: "복지수당",
      value: totalSudang,
    },
  ];

  return (
    <Box>
      <Box width="400px" height="400px" mt={6}>
        <ResponsivePie
          theme={{
            fontSize: 16,
          }}
          data={payData}
          innerRadius={0.6}
          margin={{ top: 20, right: 30, bottom: 30, left: 20 }}
          padAngle={0.7}
          cornerRadius={3}
          colors={["#5863fc", "#f9765d", "#ffc466", "#BCBFC9"]}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLabelsTextColor="#ffffff"
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          enableArcLinkLabels={false}
          layers={[
            "arcs",
            "arcLabels",
            "arcLinkLabels",
            "legends",
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
        fontWeight: "600",
      }}
    >
      <tspan x="172" dy="-1.8em" fill="#1d3c89">
        급여
      </tspan>
      <tspan x="172" dy="1.2em" fill="#1d3c89">
        구성비율
      </tspan>
      <tspan
        x="172"
        dy="2.4em"
        style={{
          fontSize: "12px",
          fontWeight: "600",
          fill: "#1d3c89",
        }}
      >
        {dataWithArc[0].data.date} ~ 현재까지
      </tspan>
      <tspan
        x="172"
        dy="2.4em"
        style={{
          fontSize: "15px",
          fontWeight: "600",
          fill: "#5863fc",
        }}
      >
        [ 단위 : 만원 ]
      </tspan>
    </text>
  );
};
