import React, { useState, useContext, useEffect } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { ResponsiveBar } from "@nivo/bar";
import InfoDialog from "./Dialog/InfoDialog";


const indexBy = "id";
const data = [
  { [indexBy]: "누적데이터" , 누적근로자: 4000, 최근30일근로자: 3000, 최근45일1회이상수신: 1000, 최근45일1회이상수신X: 1300 },
 
];


export default function PersonLineChart(props) {
  const [dataCl, setDataCl] = useState("");
  const [ShowModal, setShowModal] = useState(false);

  
  const handleName = () => {
    console.log("안에")
  };

  useEffect(() => {
    
  }, []);
  
  return (
      <Box width="900px" mt={3}> 
        <Box fontSize={40} align="left" fontWeight={800} color="#093C64">
          근로자 통계 화면
        </Box>
        <InfoDialog open={ShowModal} setOpen={setShowModal} data={dataCl} />
        <Box width="900px" height="400px">
          <ResponsiveBar
            data={data}
            keys={["누적근로자", "최근30일근로자", "최근45일1회이상수신", "최근45일1회이상수신X"]}
            indexBy={indexBy}
            groupMode="grouped"
            margin={{ top: 50, right: 120, bottom: 40, left: 50 }}
            padding={0.3}
            isInteractive={true}
            legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'top-right',
                  direction: 'column',
                  justify: false,
                  translateX: 60,
                  translateY: 0,
                  itemsSpacing: 3,
                  itemWidth: 100,
                  itemHeight: 30,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
            ]}
            // add TotalLabels after bars
            layers={["axes", "bars", TotalLabels, "markers", "legends"]}
          />
        </Box>
      <Label />
      </Box>
  );
}

function Label(props) {
  const [dataCl, setDataCl] = useState("");
  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    
  }, []);
  

  return (
    <Box py={8} px={10} width="900px" height="200px" bgcolor="#FCF4DD" display="flex" justifyContent="space-between">
      <Box>
        <Box fontSize={40} align="left" fontWeight={800} color="#7a4a7a">
          9000명
        </Box>
        <Box fontSize={15} fontWeight={800} color="#7a4a7a">
          총 누적 근로자 수
        </Box>
      </Box>
      <Box>
        <Box display="flex">
          <Box fontSize={40} align="left" fontWeight={800} color="#7a4a7a">
            4500명
          </Box>
          <Box pt={2} fontSize={25} align="left" fontWeight={800} color="#7a4a7a">
            (50%)
          </Box>  
        </Box>
        <Box fontSize={15} fontWeight={800} color="#7a4a7a">
          수신 근로자수(최근한달)
        </Box>
      </Box>
      <Box>
        <Box display="flex">
          <Box fontSize={40} align="left" fontWeight={800} color="#7a4a7a">
            4500명
          </Box>
          <Box pt={2} fontSize={25} align="left" fontWeight={800} color="#7a4a7a">
            (50%)
          </Box>  
        </Box>
        <Box fontSize={15} fontWeight={800} color="#7a4a7a">
          미수신 근로자수(최근한달)
        </Box>
      </Box>
    </Box>
  );
}


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
