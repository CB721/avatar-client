<template>
    <div class="filter-item">
        <div v-if="section === 'option'">
            <p>{{text.name}}</p>
        </div>
        <div v-else-if="section === 'filter'">
            <p>{{text.name}}</p>
        </div>
        <div v-else>
            <p>{{text.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterItem",
    props: {
        text: String,
        section: String
    }
}

</script>

<style scoped>
    .filter-item {
        width: 80%;
        margin: 0 auto;
        padding: 5%;
        border: 1px solid pink;
    }
</style>