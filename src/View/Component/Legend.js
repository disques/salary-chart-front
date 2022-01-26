import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../AppContext";

const useStyles = makeStyles((theme) => ({}));

export default function Legend(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { login, setLogin } = useContext(AppContext);

  const handleClick = (event) => {};
  // console.log(props.data);

  return (
    <Box mb={8}>
      {props.data === "true" ? (
        <Box display="flex">
          <Box display="flex">
            <Box mt="2px" width="20px" height="20px" bgcolor="#5863fc" />
            <Box
              ml={2}
              fontSize="18px"
              color="#1d3c89"
              fontFamily="Spoqa Han Sans Neo Bold"
            >
              급여
            </Box>
          </Box>
          <Box display="flex" ml={4}>
            <Box mt="2px" width="20px" height="20px" bgcolor="#f9765d" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              복지
            </Box>
          </Box>
          <Box display="flex" ml={4}>
            <Box mt="2px" width="20px" height="20px" bgcolor="#ffc466" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              상여
            </Box>
          </Box>
          <Box display="flex" ml={4}>
            <Box mt="2px" width="20px" height="20px" bgcolor="#BCBFC9" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              연장수당
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box display="flex">
            <Box mt="2px" width="20px" height="20px" bgcolor="#5863fc" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              급여
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Box mt="2px" width="20px" height="20px" bgcolor="#f9765d" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              복지
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Box mt="2px" width="20px" height="20px" bgcolor="#ffc466" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              상여
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Box mt="2px" width="20px" height="20px" bgcolor="#BCBFC9" />
            <Box ml={2} fontSize="18px" color="#1d3c89">
              연장수당
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
