import Vue from "vue";
import Vuex from "vuex";
// import api from "./api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    jobList: {},
    jobDetail: {}
  },
  mutations: {
    getJobList(state, jobList) {
      state.jobList = jobList;
    },
    getJobDetail(state, jobDetail) {
      state.jobDetail = jobDetail;
    }
    // getJobDetail(state) {
    //   api.getJobDetail().then(data => {
    //     state.jobDetail = data;
    //   });
    // }
  }
});

export default store;
