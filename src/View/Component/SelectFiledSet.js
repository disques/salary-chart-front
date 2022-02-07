import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Box, useMediaQuery, TextField, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    borderWidth: "3px",
    borderColor: "#1d3c89",
  },

  labelRoot: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#1d3c89",
  },

  menuRoot: {
    fontSize: "16px",
    color: "#1d3c89",
    fontWeight: 600,
  },
}));

const SelectFiledSet = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { title, required, inputWidth, SelectData, ...other } = props;
  const [menu, setmenu] = useState(props.current);

  const handleChange = (event) => {
    setmenu(event.target.value);
    dataProps(event); //동기화위해 콜백 함수 사용
  };

  const dataProps = (data) => {
    props.handleChangeYearList(data.target.value);
  };

  useEffect(() => {
    setmenu(props.current);
  }, [props.current]);

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
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused,
            },
          }}
        >
          {props.selectDatas.map((selectData) => (
            <MenuItem
              classes={{
                root: classes.menuRoot,
              }}
              key={selectData.title}
              value={selectData.key}
            >
              {selectData.title}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default SelectFiledSet;
