<template>
  <div>
    <div>
      <h1>hello vuex</h1>
    </div>
    <div v-if="this.info.data">
      {{car}}
      <button @click="car.getEngine().increaseFuel()">increase</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
export default {
  name: "HelloWorld",

  computed: {
    ...mapState(["info"]),
    car: function() {
      return this.info.data;
    }
  },
  mounted() {
    setTimeout(this.hello, 10000);
  },
  methods: {
    hello: function() {
      console.log(this);
      this.$store.commit("createCar");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
