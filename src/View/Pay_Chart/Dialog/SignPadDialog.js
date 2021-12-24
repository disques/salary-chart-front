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
import SignaturePad from "react-signature-canvas";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


export default function SignPadDialog(props) {
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
          전자 서명
          <Divider />
        </DialogTitle>
        <DialogContent>
          <Contets handleAddDialogClose={handleDialogClose} data={props.data} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}


const Contets = (props) => {
 
  const [flag, setFlag] = useState(false);
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
  const sigCanvas = useRef({});


  const defaultColDef = {
    height: 300,
    width: 500,
    filter: "agTextColumnFilter",
    checkbox: "true",
  };

  const clear = () => {
    sigCanvas.current.clear();
  }

  const save = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  }

  const handleTest = () => {
    console.log(imageURL);
  }
    
  const handleClose = () => {
    props.handleAddDialogClose();
  };

  return (
    <>
    <Box display="flex">
      <Box width="300px" height="300px" border={1}>
        <SignaturePad
          ref={sigCanvas}
          canvasProps={{
          className: "signatureCanvas"
          }}
        />
      </Box> 
      <Box>
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px"
            }}
          />
        ) : null}
      </Box>
    </Box>
    <button onClick={save}>확인</button>
    <button onClick={clear}>다시</button>
    <button onClick={handleClose}>닫기</button>
    <button onClick={handleTest}>테스트</button>
    </>
  );
};

