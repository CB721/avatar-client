<template>
  <header>
    <h3>{{name}}</h3>
  </header>
</template>

<script>
export default {
  name: "HeadSection",
  props: {
    name: String
  }
};
</script>

<style scoped>
    header {
        margin: 2.5vh auto;
        width: 85%;
        border: 0.1vw solid pink;
        height: 7.5vh;
        line-height: 7.5vh;
        text-align: center;
    }
</style>