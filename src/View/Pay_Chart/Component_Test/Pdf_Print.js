import React, { useState, useContext, useEffect, useRef } from "react";
import {  
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import AccountPie from "../AccountPie";

import Title from "../Title"
//import Printer, { print } from 'react-pdf-print'
import ReactToPrint from 'react-to-print';  //특정컴포넌트 인쇄
import { Page, Text, View, Document, StyleSheet, ReactPDF, PDFDownloadLink } from '@react-pdf/renderer';  //특정컴포넌트 pdf

export default function Pdf_Print(props) {
  const [name, setName] = useState("");
  const componentRef = useRef(null);
  

  useEffect(() => {
    
  }, []);


  return (
    <Box margin={3} ml={3} align="center">
      <div ref={componentRef}>
      <Box>
        <Box y={5} align="left">
          <Title title="핸드폰 등록 계정 수" />
        </Box>
        <Box 
          border={5} 
          width="1000px" 
          borderColor="#7a4a7a"
          borderRadius={8}
          position="relative"
          display="flex" 
          justifyContent="center"
        >
          <AccountPie />
        </Box>
      </Box>
      </div>
      <div>
        <ReactToPrint
         trigger={() => <button>프린트하기</button>}
         content={() => componentRef.current} />
        
      </div>
      <div>
      <PDFDownloadLink document={<MyDoc />} fileName="테스트.pdf">
        {({ blob, url, loading, error }) => (loading ? '로딩중' : 'PDF내려받기')}
      </PDFDownloadLink>
    </div>
    </Box>
  );
}

 const MyDoc = props => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Section #1 </Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
    {/* 
     {rowData.map((row,index) => 
            <Page size="A4" style={styles.page} key={index}>
                <View style={styles.section}>
                    <Text>Name: {row.FULLNAME}</Text>
                </View>
      </Page>
    )}
    */}
   
  </Document>
);