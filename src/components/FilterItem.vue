<template>
    <div class="filter-item">
        <div v-if="section === 'option'">
            <p v-on:click="selectFilter(text.name)">{{text.name}}</p>
        </div>
        <div v-else-if="section === 'filter'">
            <p v-on:click="selectFilter(text)">{{text}}</p>
        </div>
        <div v-else>
            <p v-on:click="selectFilter(text.id || text.season_num)">
                {{text.ele_type ||text.title || text.char_name}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterItem",
    props: {
        text: Object || String,
        section: String,
        action: Function,
        subFilters: Array
    },
    methods: {
        selectFilter(filter) {
            if (this.action) {
                this.action(filter);
            }
        }
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