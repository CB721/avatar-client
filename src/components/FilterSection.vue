<template>
  <section class="filter bg-color border">
      <div v-for="(filter,index) in filters" v-bind:key="index">
          <FilterItem 
              v-bind="{text: filter, section: section, action: selectFilter}"
          />
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
    filters: Array,
    action: Function,
    section: String
  },
  methods: {
      selectFilter(filter) {
          if (this.action) {
              this.action(filter);
          }
      }
  }
};
</script>

<style scoped>
.filter {
  width: 100%;
  min-height: 5vh;
  line-height: 5vh;
  text-align: center;
  padding: 5% 0;
}
</style>