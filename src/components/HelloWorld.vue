<template>
  <div>
    <div>
      
    </div>
  </div>
</template>

<script>
import Resource from './Resource.js';
export default {
  name: "HelloWorld",
  created(){
      console.log(this.resource);
      console.log(Resource.createItem());
  },
  data() {
    return {
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
