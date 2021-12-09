import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import SelectFiledSet from "./SelectFiledSet"

const useStyles = makeStyles((theme) => ({
  
}));

export default function SubTitle(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const selectDatas = [
    { title: "2018", key: "0" },
    { title: "2019", key: "1" },
    { title: "2020", key: "2" },
    { title: "2021", key: "3" },
  ];

  /*
  let selectDatas6 = managerList.map((data, index) => ({
    title: data.adminName,
    key: ++index,
  }));
 */
  const handleChangeYearList = (data) => {
    console.log(data);
    /*
    let index = --data.target.value;
    setTxtManager(managerList[index].adminSabun);*/
  }; 
  console.log(props);
  const handleClick = (event) => {
    
  };
  
  return (
      <Box display="flex">
        <Box bgcolor="#1d3c89" mt="5px" width="18px" height="25px" />
        {props.kind === "select" ?
          <Box width="150px" ml={2}>
          <SelectFiledSet
            title="날짜"
            name="txtManager"
            selectDatas={selectDatas}
            handleChange={handleChangeYearList}
                />
          </Box> :
          <Box>
            <Box 
              ml={2} 
              fontSize="26px"
              color="#1d3c89"
              fontWeight="900"
            >
             {`${props.yearTitle}년 월별 급여내역`}
            </Box>
            <Box ml={2} mt={1} color="#1d3c89">
              [ 단위 : 만원 ]
            </Box>
          </Box>
          }
       
      </Box>
  );
}

