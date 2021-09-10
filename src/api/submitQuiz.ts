import axios from "axios";

export default (params: any) => {
  return axios({
    method: "POST",
    data: params,
    url: "https://www.kuroshio.studio/api/questionnaire/report",
  });
};
