<template>
    <section class="results">
        <h3>Results</h3>
        <div class="results-box">
            {{results}}
        </div>
        <h3>Endpoint URL</h3>
        <div class="query-url">
            {{query.url}}
        </div>
        <h3>Additional Information</h3>
        <div v-if="explanation">
            <p class="explanation">{{explanation}}</p>
        </div>
        <h3>Method</h3>
        <div class="query-method">
            {{query.method}}
        </div>
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
    }
</script>

<style scoped>
    .results {
        width: 100%;
        min-height: 50vh;
        text-align: center;
        display: block;
        margin: 0 auto;
    }
    .explanation, .results-box, .query-url, .query-method, .explanation {
        width: 100%;
        line-height: 1rem;
        border: 1px solid pink;
        padding: 0.5rem 0;
        margin: 1vh auto;
    }
    .results-box {
        text-align: left;
    }
    .results-box {
        min-height: 25vh;
    }
    .query-url, .query-method, .explanation {
        min-height: 1rem;
    }
    h3 {
        width: 100%;
        text-align: center;
    }
</style>