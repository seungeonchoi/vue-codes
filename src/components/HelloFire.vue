<template>
  <div>
    firebase
    <button @click="addItem">addItem</button>
    <button @click="addItemObj">addItemObj</button>
    <button @click="removeItemObj">deleteItemObj</button>
  </div>
</template>
<script>
import { doc, now, del } from "../api/firebase";
export default {
  name: "TodoList",
  data() {
    return {};
  },
  methods: {
    addItem: function() {
      doc.update({ example: doc.union("three") }).then();
    },
    addItemObj: function() {
      let data = now().seconds;
      doc.update({ ["sampleObj." + data]: { data: 3 } }).then();
    },
    removeItemObj: function() {
      doc.update({ ["sampleObj.1575894355"]: del() }).then();
    }
  }
};
</script>

<style>
</style>
