<template>
  <div>
    <div><h1>hello vuex</h1></div>
    <div>{{subject.data}}</div>
  </div>
</template>

<script>
import Resource from "./Resource.js";
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  created() {
    this.subject= this.info;
  },
  computed: {
    ...mapState(["info"])
  },
  data() {
    return {
      subject: 1,
      resource: Resource.createItem()
    };
  },
  methods: {
    hello: function() {
      this.obj.data = "hello";
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
