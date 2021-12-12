import React, { useState, useContext, useEffect } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import { animated } from "react-spring";
import InfoDialog from "./Dialog/InfoDialog";
import MonthSerch from "./MonthSerch";
import DaySerch from "./DaySerch";


const indexBy = "id";
const data = [
  { [indexBy]: "2021.12.01" , 테스트: 200, 즉시: 300, 예약: 100, 저장: 60, 재발송: 50 },
  { [indexBy]: "2021.12.02" , 테스트: 100, 즉시: 400, 예약: 100, 저장: 80, 재발송: 50 },
  { [indexBy]: "2021.12.03" , 테스트: 300, 즉시: 500, 예약: 100, 저장: 50, 재발송: 50 },
  { [indexBy]: "2021.12.04" , 테스트: 150, 즉시: 200, 예약: 100, 저장: 80, 재발송: 50 },
  { [indexBy]: "2021.12.05" , 테스트: 100, 즉시: 450, 예약: 100, 저장: 70, 재발송: 50 },
  { [indexBy]: "2021.12.06" , 테스트: 150, 즉시: 200, 예약: 100, 저장: 80, 재발송: 50 },
  { [indexBy]: "2021.12.07" , 테스트: 200, 즉시: 300, 예약: 200, 저장: 50, 재발송: 50 },
];


export default function SendLine_Chart(props) {
  const [dataCl, setDataCl] = useState("");
  const [ShowModal, setShowModal] = useState(false);
  

  useEffect(() => {
    
  }, []);
  
  return (
      <Box width="900px" mt={3}> 
        <Box fontSize={40} align="left" fontWeight={800} color="#093C64">
          발송 건수
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
            keys={["테스트", "즉시", "예약", "저장", "재발송"]}
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
          9000명
        </Box>
        <Box fontSize={15} fontWeight={800} color="#7a4a7a">
          전체 발송 건수
        </Box>
      </Box>
    </Box>
  );
}

