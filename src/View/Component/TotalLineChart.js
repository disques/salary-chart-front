import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import { ResponsiveBar } from "@nivo/bar";

const useStyles = makeStyles((theme) => ({}));

export default function TotalLineChart(props) {
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

  //const indexBy = "id";

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
              fontSize: "14px",
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
      <Box width={itemWidth()} height="500px" mt={20}>
        <ResponsiveBar
          theme={{
            fontSize: 16,
          }}
          data={data}
          keys={["급여", "복지", "상여", "연장수당"]}
          colors={["#5863fc", "#f9765d", "#ffc466", "#BCBFC9"]}
          labelTextColor="#f4f0f0"
          indexBy="id"
          margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
          padding={0.4}
          axisLeft={null}
          valueFormat={(value) => `${Number(value) > 0 ? value : ""} `}
          // add TotalLabels after bars
          layers={["axes", "bars", TotalLabels, "markers", "legends"]}
        />
      </Box>
    </Box>
  );
}
