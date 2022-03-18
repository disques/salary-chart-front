import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import SelectFiledSet from "./SelectFiledSet";

const useStyles = makeStyles((theme) => ({}));

export default function SubTitle(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);
  let date = new Date();

  const handleChangeYearList = (data) => {
    props.handleChangeYearList(data);
  };

  return (
    <Box display="flex">
      <Box bgcolor="#1d3c89" mt="5px" width="18px" height="25px" />
      {props.kind === "select" ? (
        <Box width="150px" ml={2}>
          <SelectFiledSet
            title="년도"
            name="txtManager"
            selectDatas={props.yearList}
            handleChangeYearList={handleChangeYearList}
            current={props.current}
          />
        </Box>
      ) : (
        <Box>
          <Box ml={2} fontSize="26px" color="#1d3c89" fontWeight="900">
            {`${props.titleYear}년 월별 급여내역`}
          </Box>
          <Box ml={2} mt={1} color="#1d3c89">
            [ 단위 : 만원 ]
          </Box>
        </Box>
      )}
    </Box>
  );
}
