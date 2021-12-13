import React, { useState, useContext, useEffect } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { ResponsiveSunburst } from '@nivo/sunburst' //테스트

import { animated } from "react-spring";
import InfoDialog from "./Dialog/InfoDialog";


let sendData = {      
  "name": "nivo",
  "color": "hsl(336, 70%, 50%)",
  "children": [
    {
      "name": "총발송건수",
      "color": "hsl(195, 70%, 50%)",
      "children": [
        {
          "name": "월 10건 이하",
          "color": "hsl(108, 70%, 50%)",
          "value": 40
        },
        {
          "name": "월 10건 ~ 50건 이하",
          "color": "hsl(295, 70%, 50%)",
          "value": 50
        },
        {
          "name": "월 100건 ~ 200건 이하",
          "color": "hsl(295, 70%, 50%)",
          "value": 70
        },
        {
          "name": "월 200건 ~ 300건 이하",
          "color": "hsl(295, 70%, 50%)",
          "value": 70
        },
        {
          "name": "월 300건 ~ 400건 이하",
          "color": "hsl(295, 70%, 50%)",
          "value": 60
        },
        {
          "name": "월 400건 ~ 500건 이하",
          "color": "hsl(295, 70%, 50%)",
          "value": 80
        },
        {
          "name": "월500건 이상",
          "color": "hsl(295, 70%, 50%)",
          "value": 100
        },
      ]
    }
  ]
}


export default function SendTotal_Pie(props) {
  const [dataCl, setDataCl] = useState("");
  const [ShowModal, setShowModal] = useState(false);

  
  const handleName = () => {
    console.log("안에")
  };

  useEffect(() => {
    
  }, []);
  

  return (
    <Box display="flex">
      <Box pt={4} pb={2}  width="500px" height="500px" display="flex">
      <InfoDialog open={ShowModal} setOpen={setShowModal} data={dataCl} />
        <ResponsiveSunburst
          data={sendData}
          margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
          id="name"
          value="value"
          colors={{ scheme: 'set3' }}
          cornerRadius={2}
          borderColor={{ theme: 'background' }}
          borderWidth={1}
          inheritColorFromParent={false}
          childColor={{ from: "color", modifiers: [["brighter", 0.7]] }}
          enableArcLabels={true}
          arcLabel={(d) => d.id + " (" + d.value + ") "}
          arcLabelsComponent={arcLabels}
          onClick={(data) => {
            setDataCl(data);
            setShowModal(true);
          }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="black"
          layers={[
            'arcs',
            'arcLabels',
            'arcLinkLabels',
            'legends',
            CenteredMetricClient,
          ]}
        />
      </Box>
      <Box>
        <Label />
      </Box>
    </Box>
  );
}

const CenteredMetricClient = ({ dataWithArc, centerX, centerY }) => {
  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "40px",
        fontWeight: "600"
      }}
    >
      <tspan x="240" dy="0" fill="#474747">발송비율</tspan>
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
    <Box mt={8} width="400px" height="400px">
      <Box display="flex" justifyContent="center">
        <LabelItem color="#fccde5" decsTitle="총발성건수" data1="470" data2="100"/>
        <LabelItem color="#b3de69" decsTitle="10건이하" data1="40" data2="8.51"/>
        <LabelItem color="#fdb462" decsTitle="10~50건" data1="50" data2="10.64"/>
        <LabelItem color="#80b1d3" decsTitle="100~200건" data1="70" data2="14.89"/>
      </Box>
      <Box mt={5} display="flex" justifyContent="center">
        <LabelItem color="#fb8072" decsTitle="200~300건" data1="70" data2="14.89"/>
        <LabelItem color="#bebada" decsTitle="300~400건" data1="60" data2="12.77"/>
        <LabelItem color="#ffffb3" decsTitle="400~500건" data1="80" data2="17.02"/>
        <LabelItem color="#8dd3c7" decsTitle="500건이상" data1="100" data2="21.28"/>
      </Box>
      <Box mt={4} align="left">
        * 활성화 계정에서 1회라도 발송한 기업 중, 모든 발송 포함
      </Box>
    </Box>
  );
}


function LabelItem(props) {

  return (
    <Box align="left">
      <Box bgcolor={props.color} mt="5px" width="100px" height="50px" />
        <Box mt={2} fontSize="16px" color="#474747">
          {props.decsTitle}
        </Box>
      <Box>
        <Box fontSize="26px" fontWeight="600" color="#474747">
          {props.data1}개
        </Box>
        <Box fontSize="16px" fontWeight="600" color="#474747">
          ({props.data2}%)
        </Box>
      </Box>
    </Box>
  );
}

