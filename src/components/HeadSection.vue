<template>
  <header class="bg-color border">
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
  margin: 2.5vh 2.5%;
  width: 95%;
  height: 7.5vh;
  line-height: 7.5vh;
  text-align: center;
  text-transform: capitalize;
}
.request-type {
  width: 100%;
  margin-top: 2.5vh;
}
</style>