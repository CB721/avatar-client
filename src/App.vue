<template>
  <div id="app">
    <Navbar title="Avatar: The API" />
    <HeadSection name="About" />
    <div class="row">
      <div class="col-12">
        <section id="about-section">
          <p>Mauris at elit efficitur quam pulvinar hendrerit sit amet at lacus. Curabitur ac tortor suscipit lectus dignissim fermentum. Suspendisse accumsan ex ex, ac egestas diam pulvinar ac. Pellentesque sagittis diam justo, sed pretium sapien venenatis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultricies metus. Proin nec blandit urna. In mattis nec nulla in vestibulum. Fusce ut efficitur purus.</p>
        </section>
      </div>
    </div>
    <HeadSection name="Examples" />
    <div class="row">
      <div class="col-4">
        <OptionHeader option="Category" />
        <FilterSection v-bind="{filters: filters, action: categoryFilter}" section="option" />
      </div>
      <div v-if="selectedFilters.length" class="col-4">
        <OptionHeader option="Filter" />
        <FilterSection v-bind="{filters: selectedFilters, action: selectFilter}" section="filter" />
      </div>
      <div v-if="results.length" class="col-4">
        <OptionHeader option="Results" />
        <FilterSection v-bind:filters="filters" />
      </div>
    </div>
    <HeadSection name="Get API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Enter your email" />
        <form>
          <input
            v-model="email"
            placeholder="Your email address"
            autocomplete="email"
            id="email-input"
          />
        </form>
      </div>
      <div class="col-6">
        <OptionHeader option="Your API key" />
        <div>
          <p id="api-key">
            ahlksjdhflkjasd
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import HeadSection from "./components/HeadSection";
import OptionHeader from "./components/OptionHeader";
import FilterSection from "./components/FilterSection";

export default {
  name: "App",
  components: {
    Navbar,
    HeadSection,
    OptionHeader,
    FilterSection
  },
  data() {
    return {
      filters: [
        {
          name: "Character",
          multipleFilters: false,
          filter: ["all", "element", "id"]
        },
        {
          name: "Quote",
          multipleFilters: true,
          filter: ["all", "charid", "episodeid", "seasonid"]
        },
        {
          name: "Element",
          multipleFilters: false,
          filter: ["all"]
        },
        {
          name: "Episode",
          multipleFilters: false,
          filter: ["all", "id"]
        },
        {
          name: "Season",
          multipleFilters: false,
          filter: ["all", "season_num"]
        }
      ],
      categorySelection: "",
      filterSelection: "",
      selectedFilters: [],
      results: []
    };
  },
  methods: {
    categoryFilter(filter) {
      this.categorySelection = filter;
      for (let i = 0; i < this.filters.length; i++) {
        if (this.filters[i].name === filter) {
          this.selectedFilters = this.filters[i].filter;
        }
      }
      this.filterSelection = ""
    },
    selectFilter(filter) {
      this.filterSelection = filter;
    }
  },
  watch: {
    selectedFilters: function () {
      this.results = []
    },
    filterSelection: function () {
      if (this.filterSelection) {
        console.log(this.filterSelection);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
.row {
  width: 95%;
  margin: 0;
  padding: 2.5%;
  display: flex;
  justify-content: space-around;
}
.col-4,
.col-6,
.col-12 {
  margin: 0;
  padding: 2.5%;
  display: block;
}
.col-4 {
  width: 30%;
}
.col-6 {
  width: 40%;
}
.col-12 {
  width: 95%;
}
#email-input, #api-key {
  height: 5vh;
  line-height: 5vh;
  width: 95%;
  padding: 2.5%;
  margin: 0 auto;
  border: 1px solid pink;
}
</style>
