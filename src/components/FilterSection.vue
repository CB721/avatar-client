<template>
  <section class="filter">
    <div v-for="filter in filters" v-bind:key="filter.name">
        <FilterItem v-bind="{text: filter, section: 'option'}" />
    </div>
  </section>
</template>


<script>
import FilterItem from "./FilterItem";

export default {
  name: "FilterSection",
  components: {
    FilterItem
  },
  props: {
    filters: Array
  }
};
</script>

<style scoped>
.filter {
  width: 100%;
  min-height: 5vh;
  line-height: 5vh;
  text-align: center;
}
</style>