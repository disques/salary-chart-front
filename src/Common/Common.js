import axios from "axios";

/* window 전역 변수에 sStorage 값을 설정 */
window.sStorage =
  window.sessionStorage ||
  (() => {
    // window.sStorage = (function() {
    let winObj = opener || window; //opener가 있으면 팝업창으로 열렸으므로 부모 창을 사용
    let data = JSON.parse(winObj.top.name || "{}");
    let fn = {
      length: Object.keys(data).length /* 요거 ie8 에서 안된다고 함 */,
      setItem: function (key, value) {
        data[key] = value + "";
        winObj.top.name = JSON.stringify(data);
        fn.length++;
      },
      getItem: function (key) {
        return data[key] || null;
      },
      key: function (idx) {
        return Object.keys(data)[idx] || null; //Object.keys() 는 IE9 이상을 지원하므로 IE8 이하 브라우저 환경에선 수정되어야함
      },
      removeItem: function (key) {
        delete data[key];
        winObj.top.name = JSON.stringify(data);
        fn.length--;
      },
      clear: function () {
        winObj.top.name = "{}";
        fn.length = 0;
      },
    };
    return fn;
  })();

export const APIRequest = (Model, CMD, addParams) => {
  return new Promise((resolve, reject) => {
    let params = {
      Model: Model,
      CMD: CMD,
    };
    if (addParams) {
      params = { ...params, ...addParams };
    }
    axios({
      method: "POST",
      url: "https://jan.himgt.net/servlets/HtmMaster?TypeM=EzF4gbVc9",
      // url: "https://dbhan.himgt.net/servlets/HtmMaster?TypeM=EzF4gbVc9",
      params: params,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const asyncAPI = async (zone, Model, CMD, addParams) => {
  let params = {
    Model: Model,
    CMD: CMD,
  };
  if (addParams) {
    params = { ...params, ...addParams };
  }
  if (zone === "zone") zone = sStorage.getItem("zone");
  const { data } = await axios({
    method: "POST",
    url: "https://" + zone + ".himgt.net/servlets/HtmMaster?TypeM=EzF4gbVc9",
    // url: "https://dbhan.himgt.net/servlets/HtmMaster?TypeM=EzF4gbVc9",
    params: params,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
