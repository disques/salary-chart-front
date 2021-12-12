import React, { useState, useContext, useEffect } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import PersonLineChart from "./PersonLineChart";
import AccountPie from "./AccountPie";
import ClientPie from "./ClientPie";
import SendActive_Pie from "./SendActive_Pie";
import SendTotal_Pie from "./SendTotal_Pie";
import JoinLineChart from "./JoinLineChart";
import SendLine_Chart from "./SendLine_Chart";
import Title from "./Title"



export default function MainChart(props) {
  const [name, setName] = useState("");

  const handleName = () => {
    console.log("안에")
  };

  useEffect(() => {
    
  }, []);

  return (
    <Box margin={3} ml={3} align="center">
      <Box>
        <Box y={5} align="left">
          <Title title="핸드폰 등록 계정 수" />
        </Box>
        <Box 
          border={5} 
          width="1000px" 
          borderColor="#7a4a7a"
          borderRadius={8}
          position="relative"
          display="flex" 
          justifyContent="center"
        >
          <AccountPie />
        </Box>
      </Box>
      <Box mt={8}>
        <Box y={5} align="left">
          <Title title="이용 회사(그룹) 수" />
        </Box>
        <Box  
          border={5} 
          width="1000px" 
          borderColor="#7a4a7a"
          borderRadius={8}
          position="relative"
          display="flex" 
          justifyContent="center"
        >
          <ClientPie />
        </Box>
      </Box>
      <Box mt={20} mb={5}>
        <PersonLineChart />
      </Box>
      <Box mt={10}>
        <Box y={5} align="left">
          <Title title="활성화 계정" />
        </Box>
        <Box
          border={5} 
          width="1000px" 
          borderColor="#7a4a7a"
          borderRadius={8}
          position="relative"
          display="flex" 
          justifyContent="center"
        >
          <SendActive_Pie />
        </Box> 
      </Box>
      <Box mt={10}>
        <Box y={5} align="left">
          <Title title="전체계정 발송비율" />
        </Box>
        <Box
          border={5} 
          width="1000px" 
          borderColor="#7a4a7a"
          borderRadius={8}
          position="relative"
          display="flex" 
          justifyContent="center"
          >
          <SendTotal_Pie />
        </Box>
      </Box>
      <Box mt={10}>
        <JoinLineChart />
      </Box>
      <Box mt={10}>
        <SendLine_Chart />
      </Box>
    </Box>
  );
}

