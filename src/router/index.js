import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import HelloFire from "../components/HelloFire.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/firebase",
      name: "HelloFire",

      component: HelloFire
    }
  ]
});