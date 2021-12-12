import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import PaySelectFiledSet from "./PaySelectFiledSet"

const useStyles = makeStyles((theme) => ({
  
}));

export default function MonthSerch(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const selectDatas = [
    { title: "1월", key: "0" },
    { title: "2월", key: "1" },
    { title: "3월", key: "2" },
    { title: "4월", key: "3" },
    { title: "5월", key: "4" },
    { title: "6월", key: "5" },
    { title: "7월", key: "6" },
    { title: "8월", key: "7" },
    { title: "9월", key: "8" },
    { title: "10월", key: "9" },
    { title: "11월", key: "10" },
    { title: "12월", key: "11" },
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
      <Box>
        <Box display="flex">
          <Box width="150px">
            <PaySelectFiledSet
              title="월별검색"
              name="txtManager"
              selectDatas={selectDatas}
              handleChange={handleChangeYearList}
            />  
          </Box>
          <Button fontSize="24px">
            검색
          </Button>
        </Box> 
      </Box>
  );
}

