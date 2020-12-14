import axios from "axios";

let URL = "http://localhost:3000/";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export default {
  getJobList(q) {
    return axios.get(URL + "jobList", { params: { q: q } }).then(response => {
      return response.data;
    });
  },
  getJobDetail(id) {
    return axios.get(URL + "jobDetail", { params: { jobId: id } }).then(response => {
      return response.data;
    });
  }
};
