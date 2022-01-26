import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";
import TotalPieChart from "./TotalPieChart";
import TotalLineChart from "./TotalLineChart";
import PieDesc from "./PieDesc";
import BoxTitle from "./BoxTitle";
import SubTitle from "./SubTitle";
import Legend from "./Legend";
import axios from "axios";
import { APIRequest } from "../../Common/Common";
import { asyncAPI } from "../../Common/Common";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    left: "20px",
    top: "-35px",
  },

  selectListBox: {
    position: "absolute",
    left: "-1px",
    top: "50px",
  },

  SubTitleBox: {
    position: "relative",
    left: "-1px",
    top: "40px",
  },

  divider: {
    borderTop: "1px",
    background: "#1d3c89",
    height: "1px",
  },

  boxdivider: {
    border: "none",
    borderTop: "1px dotted #1d3c89",
    backgroundColor: "#fff",
    backgroundSize: "22px",
    height: "1px",
    width: "100%",
  },

  legendBox: {
    position: "absolute",
    left: "30px",
    top: "120px",
  },
}));

export default function TotalPayList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  let date = new Date();
  const { login, setLogin } = useContext(AppContext);
  const [dataList, setDataList] = useState("");
  const [titleYear, setTitleYear] = useState(date.getFullYear().toString());
  const [yearList, setYearList] = useState([]);

  const getYearlist = async () => {
    try {
      const data = await asyncAPI("HtmPearlAPI", "YearList", {
        HtmPerSabun: "P1807240002",
      }).catch((e) => {
        throw Error(`${e}`);
      });
      let thisYy;
      let yylist = [];
      data.map((item, idx) => {
        if (idx === 0) thisYy = item.year;
        yylist.push({
          title: item.year,
          key: item.year,
        });
      });
      setYearList(yylist);
      setTitleYear(thisYy);
      getSalary(thisYy);
    } catch (e) {
      console.log(e);
    }
  };

  const getSalary = async (data) => {
    try {
      const salary = await asyncAPI("HtmPearlAPI", "PastSalary", {
        HtmPerSabun: "P1807240002",
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
    { id: "2022.01", 급여: 600, 복지: 40, 상여: null, 복지수당: 80 },
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
        mt={8}
        border={5}
        width="1150px"
        borderColor="#1d3c89"
        borderRadius={5}
        position="relative"
      >
        <Box className={classes.title}>
          <BoxTitle />
        </Box>
        <Box className={classes.selectListBox}>
          <SubTitle
            kind="select"
            handleChangeYearList={handleChangeYearList}
            yearList={yearList}
          />
        </Box>
        <Box className={classes.legendBox}>
          <Legend />
        </Box>
        <Box display="flex" justifyContent="center" className={classes.pieBox}>
          {dataList && <TotalPieChart data={dataList} />}
        </Box>
        <Box mt={3} width="1000px" margin="auto">
          <Divider className={classes.divider} />
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <PieDesc titleYear={titleYear} />
        </Box>
        <Box mt={5} className={classes.boxdivider}>
          {" "}
        </Box>
        <Box className={classes.SubTitleBox}>
          <SubTitle kind="text" titleYear={titleYear} />
        </Box>
        <Box mb={3} display="flex" justifyContent="center">
          {dataList && <TotalLineChart data={dataList} />}
        </Box>
        <Box display="flex" justifyContent="center">
          <Legend data="true" />
        </Box>
      </Box>
    </Box>
  );
}
