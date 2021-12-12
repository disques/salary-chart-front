import React, { useState, useContext, useEffect, useRef } from "react";
import { useTheme, makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Typography,
  Container,
  Link,
  IconButton,
  Divider,
  Checkbox,
} from "@material-ui/core";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


export default function InfoDialog(props) {
  const theme = useTheme();
  const { open, setOpen } = props;
 
  console.log(props);
  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">
          회사 리스트
          <Divider />
        </DialogTitle>
        <DialogContent>
          <ClientList handleAddDialogClose={handleDialogClose} data={props.data} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}


const ClientList = (props) => {
 
  const [flag, setFlag] = useState(false);
  const [adminList, setAdminList] = useState([]);
  const [rowData, setRowData] = useState(null);
  const gridRef = useRef(null);


  const defaultColDef = {
    height: 300,
    width: 500,
    filter: "agTextColumnFilter",
    checkbox: "true",
  };

  const listData = [
    { index: 1 , clientName: "테스트1", sendDate: "2021/12/25", sendCnt: "400" },
    { index: 2 , clientName: "테스트2", sendDate: "2021/12/20", sendCnt: "300" },
    { index: 3 , clientName: "테스트3", sendDate: "2021/12/15", sendCnt: "200" },
    { index: 4 , clientName: "테스트4", sendDate: "2021/12/01", sendCnt: "350" },
    { index: 5 , clientName: "테스트5", sendDate: "2021/12/08", sendCnt: "300" },
  ];

  console.log(listData)
  useEffect(() => {
   
  }, [flag]);

  const handleAddDialogClose = () => {
    props.handleAddDialogClose();
  };


  return (
    <>
      <Box fontSize="30px">
        {props.data.id} : {props.data.value}
      </Box>
      <Box width="527px" height="500px" className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            defaultColDef={defaultColDef}
            rowData={listData}
            rowSelection="multiple"
          > 
              <AgGridColumn
                field="index"
                headerName="No."
                width={100}
                sortable={true}
              ></AgGridColumn>
              <AgGridColumn
                field="clientName"
                headerName="회사명"
                width={140}
                sortable={true}
              ></AgGridColumn>
              <AgGridColumn
                field="sendDate"
                headerName="최근전송일"
                width={140}
                sortable={true}
              ></AgGridColumn>
              <AgGridColumn
                field="sendCnt"
                headerName="발송건수"
                width={140}
                sortable={true}
              ></AgGridColumn>
          </AgGridReact>
      </Box>
      <Box display="flex" mt={2} mr={3} justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleAddDialogClose}
            color="secondary"
            >
              닫기
            </Button>
      </Box>
    </>
  );
};

