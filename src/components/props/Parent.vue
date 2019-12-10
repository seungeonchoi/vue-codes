<template>
  <div>
  <h1>Parent</h1>
    <div>
      <Child v-bind:msg="str"></Child>
    </div>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child
  },
  data() {
    return {
      str:"call from Parent"
    };
  },
  methods: {
    hello: function() {
      this.obj.data = "hello";
    }
  }
};
</script>
<style scoped>
</style>