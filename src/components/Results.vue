<template>
  <section class="results bg-color shadow border">
    <h3>Results</h3>
    <div class="results-box bg-color-black border">{{results}}</div>
    <h3>Endpoint URL</h3>
    <div class="query-url bg-color-black border">{{query.url}}</div>
    <div v-if="explanation">
      <h3>Additional Information</h3>
      <p class="explanation bg-color-black border">{{explanation}}</p>
    </div>
    <h3>Method</h3>
    <div class="query-method bg-color-black border">{{query.method}}</div>
  </section>
</template>

<script>
export default {
  name: "Results",
  props: {
    results: Array,
    explanation: String,
    query: Object
  }
};
</script>

<style scoped>
.results {
  width: 100%;
  min-height: 50vh;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 1rem 0;
}
.explanation,
.results-box,
.query-url,
.query-method {
  width: 80%;
  line-height: 1rem;
  padding: 1rem 0;
  margin: 1vh auto;
}
.results-box {
  text-align: center;
}
.results-box {
  min-height: 25vh;
}
.query-url,
.query-method,
.explanation {
  min-height: 1rem;
}
h3 {
  width: 100%;
  text-align: center;
}
</style>