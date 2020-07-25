<template>
  <header>
    <h5>{{option}}</h5>
  </header>
</template>

<script>
export default {
  name: "OptionHeader",
  props: {
    option: String
  }
};
</script>

<style scoped>
    header {
        margin: 2.5vh auto;
        width: 100%;
        border: 0.1vw solid pink;
        min-height: 5vh;
        line-height: 5vh;
        text-align: center;
    }
</style>