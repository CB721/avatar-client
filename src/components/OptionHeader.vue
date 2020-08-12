<template>
  <header class="bg-color border">
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
        min-height: 5vh;
        line-height: 5vh;
        text-align: center;
        text-transform: capitalize;
    }
</style>