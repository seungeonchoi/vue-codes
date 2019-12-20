<template>
  <div>
    <input @change="showFileInfo($event)" type="file"/>
  </div>
</template>

<script>
import Resource from "./Resource.js";
export default {
  name: "InputTest",
  created() {
    
  },
  data() {
    return {
      data: Resource.createItem()
    };
  },
  methods: {
    showFileInfo: function(event) {
      console.log(event.target.files);
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
