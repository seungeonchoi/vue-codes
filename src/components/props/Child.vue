<template>
  <div>
    child {{msg}}
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    msg: String
  },
  data() {
    return {
      obj: ""
    };
  },
  methods: {
    hello: function() {
      this.obj.data = "child";
    }
  }
};
</script>
<style scoped>
</style>