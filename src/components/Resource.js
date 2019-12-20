console.log("called");
export default {
  createItem() {
    console.log(this);
    return {
      name: "hi"
    };
  }
};
