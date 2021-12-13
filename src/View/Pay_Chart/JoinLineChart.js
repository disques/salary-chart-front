import React, { useState, useContext, useEffect } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { ResponsiveBar } from "@nivo/bar";
import { animated } from "react-spring";
import InfoDialog from "./Dialog/InfoDialog";
import MonthSerch from "./MonthSerch";
import DaySerch from "./DaySerch";


const indexBy = "id";
const data = [
  { [indexBy]: "2021.12.01" , 일반: 2000, 인사: 300, 세무: 100 },
  { [indexBy]: "2021.12.02" , 일반: 1500, 인사: 300, 세무: 100 },
  { [indexBy]: "2021.12.03" , 일반: 200, 인사: 300, 세무: 100 },
  { [indexBy]: "2021.12.04" , 일반: 2200, 인사: 300, 세무: 100 },
  { [indexBy]: "2021.12.05" , 일반: 1800, 인사: 300, 세무: 100 },
];


export default function JoinLineChart(props) {
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
          가입자수
        </Box>
        <Box mt={3}>
          <MonthSerch kind="select"/>
        </Box>
        <Box mt={1}>
          <DaySerch /> 
        </Box>
        <InfoDialog open={ShowModal} setOpen={setShowModal} data={dataCl} />
        <Box width="900px" height="400px">
          <ResponsiveBar
            data={data}
            keys={["일반", "인사", "세무" ]}
            indexBy={indexBy}
            groupMode="grouped"
            margin={{ top: 50, right: 100, bottom: 40, left: 40 }}
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
            layers={["axes", "bars", "markers", "legends"]}
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
    <Box py={8} width="900px" height="200px" bgcolor="#FCF4DD" display="flex" justifyContent="center">
      <Box>
        <Box fontSize={40} align="left" fontWeight={800} color="#7a4a7a">
          9700명
        </Box>
        <Box fontSize={15} fontWeight={800} color="#7a4a7a">
          누적 가입자수
        </Box>
      </Box>
    </Box>
  );
}
