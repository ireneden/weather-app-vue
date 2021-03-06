import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; // import components that you wish to became Routes

Vue.use(Router); // tella Vue to action with Router

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ // All the routes are described here
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/why",
      name: "why",
      component: () =>
        import("./views/Why.vue")
    }
  ]
});
