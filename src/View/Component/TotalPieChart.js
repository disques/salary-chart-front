import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { ResponsiveSunburst } from "@nivo/sunburst";
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

  let totalPay = 0; //급여
  let totalBokji = 0; //복지
  let totalSangyeo = 0; //상여
  let totalSudang = 0; //복지수당

  props.data.map((data) => {
    totalPay = totalPay + data.급여;
    totalBokji = totalBokji + data.복지;
    totalSangyeo = totalSangyeo + data.상여;
    totalSudang = totalSudang + data.연장수당;
  });

  let payData = [
    {
      id: "급여",
      value: Math.round(totalPay / 10000),
    },
    {
      id: "복지",
      value: Math.round(totalBokji / 10000),
    },
    {
      id: "싱여",
      value: Math.round(totalSangyeo / 10000),
    },
    {
      id: "연장수당",
      value: Math.round(totalSudang / 10000),
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
          innerRadius={0.6}
          margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          padAngle={0.7}
          cornerRadius={3}
          colors={["#313D77", "#5863FC", "#FFC466", "#F9765D"]} //#e3e4e8 기존 색
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          enableArcLinkLabels={true}
          arcLinkLabel="value"
          arcLabelsTextColor="#ffffff"
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          enableArcLinkLabels={false}
          tooltip={({ datum: { id, value, color } }) => (
              <div
                  style={{
                    padding: "12px",
                    background: "#ffffff",
                    border: "1px solid #E6E6E6"
                  }}
              >
                <Box display="flex">
                  <Box width="15px" height="15px" bgcolor={color} />&nbsp;
                  <Box>
                    {id} :
                    <strong>
                      {value}만원
                    </strong>
                  </Box>
                </Box>

              </div>
          )}
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
      <tspan x="172" dy="-1.2em" fill="#1d3c89">
        급여
      </tspan>
      <tspan x="172" dy="1.2em" fill="#1d3c89">
        구성비율
      </tspan>
      <tspan
        x="172"
        dy="2.4em"
        fill="#1d3c89"
        style={{
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        [ 단위 : 만원 ]
      </tspan>
    </text>
  );
};
