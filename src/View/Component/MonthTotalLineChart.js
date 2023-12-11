import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { ResponsiveBar } from "@nivo/bar";

const useStyles = makeStyles((theme) => ({}));

export default function MonthTotalLineChart(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);
  const { data } = props;

  const itemWidth = () => {
    // 12월까지있을때를 기준으로 막대그래프끼리의 간격을 맞춰달라함 23.12.11 선희
    switch (data.length) {
      case 1:
        return "300px";
      case 2:
      case 3:
        return "500px";
      case 8:
      case 9:
        return "1000px";
      case 10:
      case 11:
      case 12:
        return "1150px";
      default:
        return "800px";
    }
  };

  const TotalLabels = ({ bars, yScale }) => {
    // space between top of stacked bars and total label
    const labelMargin = 40;
    function formatNumber(number) {
      const parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    return bars.map(({ data: { data, indexValue }, x, width }, i) => {
      // sum of all the bar values in a stacked bar
      const total = Object.keys(data)
        //f ilter out whatever your indexBy value is
        .filter((key) => key !== "id")
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
              fontSize: "16px",
            }}
          >
            {/*{total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}*/}
            {formatNumber(total)}
            만원
          </text>
        </g>
      );
    });
  };

  return (
    <Box>
      <Box width={itemWidth()} height="400px" mt={3} mb={5}>
        <ResponsiveBar
          theme={{
            fontSize: 16,
          }}
          data={data}
          keys={["급여", "복지", "상여", "연장수당"]}
          indexBy="id"
          colors={["#313D77", "#5863FC", "#FFC466", "#F9765D"]}
          margin={{ top: 50, right: 50, bottom: 60, left: 50 }}
          labelTextColor="#f4f0f0"
          padding={0.4}
          axisLeft={null}
          valueFormat={(value) => `${Number(value) > 0 ? value : ""} `}
          // add TotalLabels after bars
          layers={["axes", "bars", TotalLabels, "markers", "legends"]}
          tooltip={({ id, value, color, indexValue }) => (
            <div
              style={{
                padding: "12px",
                background: "#ffffff",
                border: "1px solid #E6E6E6",
              }}
            >
              <Box display="flex">
                <Box width="15px" height="15px" bgcolor={color} />
                &nbsp;
                <Box>
                  {id} - {indexValue} :<strong>{value}만원</strong>
                </Box>
              </Box>
            </div>
          )}
        />
      </Box>
    </Box>
  );
}
