import Vue from "vue";
import VueRouter from "vue-router";
import Joblist from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "joblist",
    component: Joblist
  },
  {
    path: "/jobdetail/:slug",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
