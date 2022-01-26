import axios from "axios";
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

export const asyncAPI = async (Model, CMD, addParams) => {
  let params = {
    Model: Model,
    CMD: CMD,
  };
  if (addParams) {
    params = { ...params, ...addParams };
  }
  const { data } = await axios({
    method: "POST",
    url: "https://jan.himgt.net/servlets/HtmMaster?TypeM=EzF4gbVc9",
    // url: "https://dbhan.himgt.net/servlets/HtmMaster?TypeM=EzF4gbVc9",
    params: params,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
