<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloVuex.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    change: function() {
      this.message.data = "change";
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
