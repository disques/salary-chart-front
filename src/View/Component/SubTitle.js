import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import SelectFiledSet from "./SelectFiledSet"

const useStyles = makeStyles((theme) => ({
  
}));

export default function PieDesc(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const selectDatas = [
    { title: "미등록", key: "0" },
    { title: "수임", key: "1" },
    { title: "해임", key: "2" },
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

  const handleClick = (event) => {
    
  };

  return (
      <Box display="flex">
        <Box bgcolor="#1d3c89" mt={1} width="10px" height="20px" />
        <Box width="150px" ml={2}>
          <SelectFiledSet
            title="날짜"
            name="txtManager"
            selectDatas={selectDatas}
            handleChange={handleChangeYearList}
                />
        </Box>
      </Box>
  );
}

