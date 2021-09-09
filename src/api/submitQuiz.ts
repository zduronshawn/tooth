import axios from "axios";

export default (params: any) => {
  return axios({
    method: "POST",
    data: params,
    url:
      "http://service-01lxf3xn-1252645435.sh.apigw.tencentcs.com:80/test/answer"
  });
};
