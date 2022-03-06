import React, { useState, useContext, useEffect } from "react";
import { Link as RouterLink, useHistory, withRouter } from "react-router-dom";
import { APIRequest } from "../Common/Common";

const CheckPage = (props) => {
  useEffect(() => {
    let url = new URL(location.href);
    let urlParam = url.searchParams;
    let key = urlParam.get("key");
    if (key !== null) {
      APIRequest("jan", "HtmPearlAPI", "PerData", {
        HtmKey: key,
      })
        .then((res) => {
          if (res.result != null) {
            sStorage.setItem("login", "false");
            sStorage.setItem("zone", "");
            sStorage.setItem("sabun", "");
            sStorage.setItem("name", "");
            alert("로그인 정보가 잘못되었습니다.");
            props.history.push({
              pathname: "/fail",
            });
          } else {
            sStorage.setItem("login", "true");
            sStorage.setItem("zone", res.zone);
            sStorage.setItem("sabun", res.sabun);
            sStorage.setItem("name", res.name);
            props.history.push({
              pathname: "/chart",
              state: {
                // company: res.resultData.user.htmComNm,
              },
            });
          }
        })
        .catch((err) => {
          sStorage.setItem("login", "false");
          sStorage.setItem("zone", "");
          sStorage.setItem("sabun", "");
          sStorage.setItem("name", "");
          alert("로그인 정보가 잘못되었습니다.");
          props.history.push({
            pathname: "/fail",
          });
          // console.log(err);
        });
    } else if (sStorage.getItem("login") !== "true") {
      sStorage.setItem("login", "false");
      sStorage.setItem("zone", "");
      sStorage.setItem("sabun", "");
      sStorage.setItem("name", "");
      alert("로그인 정보가 잘못되었습니다.");
      props.history.push({
        pathname: "/fail",
      });
    }
  }, []);
  return <div></div>;
};
export default withRouter(CheckPage);
