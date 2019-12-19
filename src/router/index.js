import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloVuex.vue";
import HelloFire from "../components/HelloFire.vue";
import Parent from "../components/props/Parent.vue";
import InputTest from "../components/InputTest.vue";
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
    },
    {
      path: "/props",
      name: "Parent",
      component: Parent
    },
    {
      path: "/inputtest",
      name: "InputTest",
      component: InputTest
    }
  ]
});
