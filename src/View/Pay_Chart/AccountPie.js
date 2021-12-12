import React, { useState, useContext, useEffect } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, HorizontalBar } from "react-chartjs-2";
import { ResponsiveSunburst } from '@nivo/sunburst' //테스트

import { animated } from "react-spring";
import InfoDialog from "./Dialog/InfoDialog";


let account = {      
  "name": "nivo",
  "color": "hsl(336, 70%, 50%)",
  "children": [
    {
      "name": "총가입자수",
      "color": "hsl(195, 70%, 50%)",
      "children": [
        {
          "name": "활성화계정",
          "color": "hsl(108, 70%, 50%)",
          "value": 80
        },
        {
          "name": "비활성화계정",
          "color": "hsl(295, 70%, 50%)",
          "value": 20
        },
      ]
    }
  ]
}

export default function PersonLineChart(props) {
  const [dataCl, setDataCl] = useState("");
  const [ShowModal, setShowModal] = useState(false);

  
  const handleName = () => {
    console.log("안에")
  };

  useEffect(() => {
    
  }, []);
  

  return (
    <Box display="flex">
      <Box pt={4} pb={2} width="500px" height="500px" display="flex">
        <ResponsiveSunburst
          data={account}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          id="name"
          value="value"
          cornerRadius={2}
          borderColor={{ theme: 'background' }}
          borderWidth={1}
          inheritColorFromParent={false}
          childColor={{ from: "color", modifiers: [["brighter", 0.7]] }}
          arcLabelsComponent={arcLabels}
          enableArcLabels={true}
          arcLabelsSkipAngle={10}
          layers={[
            'arcs',
            'arcLabels',
            'arcLinkLabels',
            'legends',
            CenteredMetricAccount,
          ]}
      />
      </Box>
      <Box>
        <Label />
      </Box>
    </Box>
   
  );
}


const CenteredMetricAccount = ({ dataWithArc, centerX, centerY }) => {
  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "35px",
        fontWeight: "600"
      }}
    >
      <tspan x="240" dy="-0.6em" fill="#474747">총계정</tspan>
      <tspan x="240" dy="1.2em" fill="#474747">100</tspan>
    </text>
  );
};

const arcLabels = ({ datum, label, style }) => {
  console.log("내부")
  console.log(style);
  console.log(datum);
  return (
    <animated.g transform={style.transform} style={{ pointerEvents: "none" }}>
      <text
        //x={datum.id === "비활성화회사" ? 20 : ""}  이거쓰면됨
        textAnchor="middle"
        dominantBaseline="left"
        fill={style.textColor}
        style={{
          fontSize: 14,
          fontWeight: 600,
          textShadow: "0.25px 0.25px 4px #ffffff"
        }}
      >
        {datum.percentage.toFixed(2)}%
      </text>
    </animated.g>
  );
};


function Label(props) {
  const [dataCl, setDataCl] = useState("");
  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    
  }, []);
  

  return (
    <Box mt={10} width="400px" height="400px">
      <Box display="flex" justifyContent="center">
        <LabelItem color="#e8c1a0" decsTitle="회사수" data1="20" data2="10"/>
        <LabelItem color="#f47560" decsTitle="활성화 회사" data1="20" data2="10"/>
      </Box>
      <Box mt={5}>
        <LabelItem color="#f1e15b" decsTitle="비활성화 회사" data1="20" data2="10"/>
      </Box>
      <Box mt={4} align="left">
        * 검색일 기준 ,최근 45일 동안 1회이상 발송이력이 있으면 활성
      </Box>
    </Box>
  );
}


function LabelItem(props) {

  return (
    <Box align="left">
      <Box bgcolor={props.color} mt="5px" width="200px" height="50px" />
      <Box mt={2} fontSize="24px" color="#474747">
        {props.decsTitle}
      </Box>
      <Box fontSize="32px" fontWeight="600" color="#474747">
        {props.data1}개 ({props.data2}%)
      </Box>
    </Box>
    
  );
}

