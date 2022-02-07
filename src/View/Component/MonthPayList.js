import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import MonthLineChart from "./MonthLineChart";
import MonthPayPieChart from "./MonthPayPieChart";
import MonthTotalLineChart from "./MonthTotalLineChart";
import BoxTitle from "./BoxTitle";
import SubTitle from "./SubTitle";
import Legend from "./Legend";
import { asyncAPI } from "../../Common/Common";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    left: "20px",
    top: "-35px",
  },

  selectListBox: {
    position: "relative",
    left: "-1px",
    top: "-10px",
  },

  legendBox: {
    position: "relative",
    left: "30px",
    top: "20px",
  },

  chartBox: {
    position: "relative",
    left: "0px",
    top: "-150px",
  },

  boxdivider: {
    position: "relative",
    top: "-100px",
    border: "none",
    borderTop: "1px dotted #1d3c89",
    backgroundColor: "#fff",
    backgroundSize: "22px",
    height: "1px",
    width: "100%",
  },

  SubTitleBox: {
    position: "relative",
    left: "-1px",
    top: "-60px",
  },

  dividerPie: {
    position: "relative",
    top: "-200px",
    borderTop: "1px",
    background: "#1d3c89",
    height: "1px",
  },

  dividerLine: {
    position: "relative",
    top: "-100px",
    borderTop: "1px",
    background: "#1d3c89",
    height: "1px",
  },
}));

export default function MonthPayList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  let date = new Date();
  const { login, setLogin } = useContext(AppContext);
  const [dataList, setDataList] = useState("");
  const [titleYear, setTitleYear] = useState(date.getFullYear().toString());

  const getYearlist = async () => {
    try {
      const data = await asyncAPI("zone", "HtmPearlAPI", "YearList", {
        HtmPerSabun: sStorage.sabun,
      }).catch((e) => {
        throw Error(`${e}`);
      });
      let thisYy;
      data.map((item, idx) => {
        if (idx === 0) thisYy = item.year;
      });
      setTitleYear(thisYy);
      getSalary(thisYy);
    } catch (e) {
      console.log(e);
    }
  };

  const getSalary = async (data) => {
    try {
      const salary = await asyncAPI("zone", "HtmPearlAPI", "PastSalary", {
        HtmPerSabun: sStorage.sabun,
        HtmType: "M",
        HtmYy: data,
      }).catch((e) => {
        throw Error(`${e}`);
      });
      // console.log("salary ", salary);
      let datayy = [];
      salary.list.map((item, idx) => {
        datayy.push({
          id: item.year + "." + item.month,
          급여: item.basepay,
          복지: item.welfarepay,
          상여: item.bonuspay,
          복지수당: item.overtimepay,
        });
      });
      setDataList(datayy);
    } catch (e) {
      console.log(e);
    }
  };

  const data22 = [
    { id: "2022.01", 급여: 600, 복지: 40, 상여: 10, 복지수당: 80 },
    { id: "2022.02", 급여: 600, 복지: 30, 상여: null, 복지수당: 83 },
    { id: "2022.03", 급여: 600, 복지: 20, 상여: null, 복지수당: 50 },
    { id: "2022.04", 급여: 600, 복지: 50, 상여: null, 복지수당: 70 },
    { id: "2022.05", 급여: 600, 복지: 30, 상여: 50, 복지수당: 60 },
    { id: "2022.06", 급여: 600, 복지: 20, 상여: 50, 복지수당: 80 },
    { id: "2022.07", 급여: 600, 복지: 30, 상여: 50, 복지수당: 80 },
    { id: "2022.08", 급여: 600, 복지: 20, 상여: 50, 복지수당: 70 },
    { id: "2022.09", 급여: 600, 복지: 40, 상여: 50, 복지수당: 60 },
    { id: "2022.10", 급여: 600, 복지: 24, 상여: 50, 복지수당: 50 },
    { id: "2022.11", 급여: 600, 복지: 40, 상여: 50, 복지수당: 80 },
    { id: "2022.12", 급여: 600, 복지: 40, 상여: 50, 복지수당: 80 },
  ];

  useEffect(() => {
    getYearlist();
  }, []);

  const handleChangeYearList = (data) => {
    setTitleYear(data);
    getSalary(data);
  };

  return (
    <Box>
      <Box
        my={8}
        justifyContent="center"
        border={5}
        width="1150px"
        borderColor="#1d3c89"
        borderRadius={5}
      >
        <Box className={classes.title}>
          <BoxTitle />
        </Box>
        <Box className={classes.selectListBox}>
          <SubTitle kind="text" titleYear={titleYear} />
        </Box>
        {/*<Box className={classes.selectListBox}>*/}
        {/*  <SubTitle*/}
        {/*    kind="select"*/}
        {/*    handleChangeYearList={handleChangeYearList}*/}
        {/*    yearList={yearList}*/}
        {/*  />*/}
        {/*</Box>*/}
        <Box className={classes.legendBox}>
          <Legend />
        </Box>
        {dataList && (
          <Box
            display="flex"
            justifyContent="center"
            className={classes.chartBox}
          >
            <MonthLineChart data={dataList} />
            <MonthPayPieChart data={dataList} />
          </Box>
        )}
        <Box width="1000px" margin="auto">
          <Divider className={classes.dividerPie} />
        </Box>
        <Box className={classes.boxdivider}> </Box>
        <Box className={classes.SubTitleBox}>
          <SubTitle kind="text" titleYear={titleYear} />
        </Box>
        <Box display="flex" justifyContent="center">
          {dataList && <MonthTotalLineChart data={dataList} />}
        </Box>
        <Box width="1000px" margin="auto">
          <Divider className={classes.dividerLine} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Legend data="true" />
        </Box>
      </Box>
    </Box>
  );
}
