<template>
  <header class="bg-color border shadow">
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
        min-height: 10vh;
        line-height: 10vh;
        text-align: center;
        text-transform: capitalize;
    }
</style>