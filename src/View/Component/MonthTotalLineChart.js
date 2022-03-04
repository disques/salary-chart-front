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
    switch (data.length) {
      case 1 && 2:
        return "500px";
        break;
      case 11 && 12:
        return "1150px";
        break;
      default:
        return "800px";
        break;
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
          colors={["#5863fc", "#f9765d", "#ffc466", "#BCBFC9"]}
          margin={{ top: 50, right: 50, bottom: 60, left: 50 }}
          labelTextColor="#f4f0f0"
          padding={0.5}
          axisLeft={null}
          // add TotalLabels after bars
          layers={["axes", "bars", TotalLabels, "markers", "legends"]}
        />
      </Box>
    </Box>
  );
}
