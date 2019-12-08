<template>
  <div>
    firebase
    <button @click="addItem">addItem</button>
  </div>
</template>
<script>
import fb from "../api/firebase.js";
export default {
  name: "TodoList",
  data() {
    return {};
  },
  methods: {
    addItem: function() {
      fb.doc.update({ example: fb.union("three") }).then();
    }
  }
};
</script>

<style>
</style>
