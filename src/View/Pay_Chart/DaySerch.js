import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import PaySelectFiledSet from "./PaySelectFiledSet"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const useStyles = makeStyles((theme) => ({
  
}));

export default function DaySerch(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  
  return (
    <Box display="flex">
      <Box fontSize="20px" mr={2}>
        직접입력
      </Box>
      <Box>
        <DatePicker 
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
      <Box mx={1}>
        ~
      </Box>
      <Box>
        <DatePicker 
          dateFormat="yyyy/MM/dd"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
    </Box>
  );
}

