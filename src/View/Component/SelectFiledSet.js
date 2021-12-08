import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/styles";
import { Box, useMediaQuery, TextField } from "@material-ui/core";


const SelectFiledSet = (props) => {
  const theme = useTheme();
  const { title, required, inputWidth, SelectData, ...other } = props;
  const [menu, setmenu] = useState(props.current);

 

  const handleChange = (event) => {
    console.log(event.target.value);
    setmenu(event.target.value);
    dataProps(event);  //동기화위해 콜백 함수 사용
  };

  const dataProps = (data) => {
    props.handleChange(data);
  };

  return (
    <Box display="flex">

      
      <Box maxWidth={inputWidth} flexGrow={1}>
        <TextField
          label={title}
          variant="outlined"
          size="small"
          fullWidth
          select
          onChange={handleChange}
          value={menu} //null을 넣으면 에러가 나지만 모양은 이쁘게 나옴
        >
          {props.selectDatas.map((selectData) => (
            <option key={selectData.title} value={selectData.key}>
              {selectData.title}
            </option>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default SelectFiledSet;
