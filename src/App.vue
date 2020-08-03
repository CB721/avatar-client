<template>
  <div id="app">
    <Navbar title="Avatar: The API" />
    <HeadSection name="About" />
    <div class="row">
      <div class="col-12">
        <section id="about-section">
          <p>
            A collection of information from the TV show:
            <a
              href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender"
              target="_blank"
            >Avatar: The Last Airbender</a>. Get details on the main characters, episodes and seasons. All available without signing up for an API key!
          </p>
          <br />
          <p>
            The main purpose of this API to generate a random quote from the show. You can filter these quotes by character, episode or season. In order get access to the quotes, an API key is required. Request a new
            <a href="#key-section">API key</a> today!
          </p>
        </section>
      </div>
    </div>
    <HeadSection name="Docs" />
    <div class="row">
      <div class="col-12">
        <div id="docs-section" />
        <div v-if="docs.length">
          <div v-for="(doc, index) in docs" v-bind:key="index">
            <DocSection v-bind="{content: doc}" />
          </div>
        </div>
      </div>
    </div>
    <HeadSection name="Examples" />
    <div class="row">
      <div class="col-4">
        <div id="example-section" />
        <OptionHeader option="Category" />
        <FilterSection v-bind="{filters: filters, action: categoryFilter}" section="option" />
      </div>
      <div v-if="selectedFilters.length" class="col-4">
        <OptionHeader option="Sort By" />
        <FilterSection v-bind="{filters: selectedFilters, action: sortByFilter}" section="filter" />
      </div>
      <div v-if="finalFilter.length" class="col-4">
        <OptionHeader option="Filter" />
        <FilterSection v-bind="{filters: finalFilter, action: getResults}" />
      </div>
    </div>
    <div v-if="results.length" class="row">
      <div class="col-12">
        <Results v-bind="{results: results, explanation: explanation, query: query}" />
      </div>
    </div>
    <HeadSection name="Get API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Enter your email" />
        <div id="key-section" />
        <form>
          <input
            v-model="email"
            placeholder="Your email address"
            autocomplete="email"
            class="form-input"
          />
          <input
            v-model="email"
            placeholder="Your first name"
            autocomplete="given-name"
            class="form-input"
          />
          <input
            v-model="email"
            placeholder="Your last name"
            autocomplete="family-name"
            class="form-input"
          />
        </form>
      </div>
      <div class="col-6">
        <OptionHeader option="Your API key" />
        <div>
          <p id="api-key">ahlksjdhflkjasd</p>
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
import Results from "./components/Results";
import DocSection from "./components/DocSection";
import API from "./utils/api";
import { create } from "./utils/query";

export default {
  name: "App",
  components: {
    Navbar,
    HeadSection,
    OptionHeader,
    FilterSection,
    Results,
    DocSection
  },
  created() {
    API.docs()
      .then(res => (this.docs = res.data))
      .catch(err => console.log(err));
    document.title = "Avatar: The Last API";
  },
  data() {
    return {
      filters: [
        {
          name: "Characters",
          multipleFilters: false,
          filter: ["all", "element"]
        },
        {
          name: "Quotes",
          multipleFilters: true,
          filter: ["all", "charid", "episodeid", "seasonid"]
        },
        {
          name: "Elements",
          multipleFilters: false,
          filter: ["all"]
        },
        {
          name: "Episodes",
          multipleFilters: false,
          filter: ["all"]
        },
        {
          name: "Seasons",
          multipleFilters: false,
          filter: ["all"]
        }
      ],
      categorySelection: "",
      sortBySelection: "",
      finalSelection: null,
      selectedFilters: [],
      finalFilter: [],
      results: [],
      query: {},
      explanation: "",
      docs: []
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
      this.sortBySelection = "";
      this.finalSelection = null;
    },
    sortByFilter(filter) {
      this.sortBySelection = filter;
      this.finalSelection = null;
    },
    getResults(id) {
      this.finalSelection = id;
      if (this.categorySelection === "Quotes") {
        this.finalSelection = 1;
        this.explanation = "An API key is required in the request body.";
      } else {
        this.explanation = "";
      }
    }
  },
  watch: {
    selectedFilters() {
      this.finalFilter = [];
      this.results = [];
    },
    sortBySelection() {
      if (!this.sortBySelection) return;
      this.results = [];
      if (this.categorySelection === "Characters") {
        if (this.sortBySelection === "all") {
          API.allCharacters()
            .then(res => {
              this.finalFilter = res.data;
            })
            .catch(err => console.log(err));
        } else if (this.sortBySelection === "element") {
          API.allElements()
            .then(res => {
              this.finalFilter = res.data;
            })
            .catch(err => console.log(err));
        }
      } else if (this.categorySelection === "Quotes") {
        switch (this.sortBySelection) {
          case "all":
            this.finalFilter = [{ title: "random" }];
            break;
          case "charid":
            API.allCharacters()
              .then(res => {
                this.finalFilter = res.data;
              })
              .catch(err => console.log(err));
            break;
          case "episodeid":
            API.allEpisodes()
              .then(res => {
                this.finalFilter = res.data;
              })
              .catch(err => console.log(err));
            break;
          case "seasonid":
            API.allSeasons()
              .then(res => {
                this.finalFilter = res.data;
              })
              .catch(err => console.log(err));
            break;
          default:
            return;
        }
      } else if (this.categorySelection === "Elements") {
        API.allElements()
          .then(res => {
            this.finalFilter = res.data;
            this.results = res.data;
          })
          .catch(err => console.log(err));
      } else if (this.categorySelection === "Episodes") {
        API.allEpisodes()
          .then(res => {
            this.finalFilter = res.data;
          })
          .catch(err => console.log(err));
      } else if (this.categorySelection === "Seasons") {
        API.allSeasons()
          .then(res => {
            this.finalFilter = res.data;
          })
          .catch(err => console.log(err));
      }
    },
    finalSelection() {
      if (
        !this.finalSelection ||
        !this.sortBySelection ||
        !this.categorySelection
      )
        return;
      const id = this.finalSelection;
      this.query = create(this.categorySelection, this.sortBySelection, id);
      switch (this.categorySelection) {
        case "Characters":
          if (this.sortBySelection === "all") {
            API.oneCharacter(id)
              .then(res => {
                this.results = [res.data];
              })
              .catch(err => console.log(err));
          } else {
            API.allCharacters(id)
              .then(res => {
                this.results = res.data;
              })
              .catch(err => console.log(err));
          }
          break;
        case "Quotes":
          this.results = API.quotes();
          break;
        case "Episodes":
          API.oneEpisode(id)
            .then(res => {
              this.results = [res.data];
            })
            .catch(err => console.log(err));
          break;
        case "Seasons":
          API.oneSeason(id)
            .then(res => {
              this.results = [res.data];
            })
            .catch(err => console.log(err));
          break;
        default:
          return;
      }
    }
  }
};
</script>

<style>
/* @font-face {
  font-family: "Avatar";
  src:url("../")
} */
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
.col-8,
.col-12 {
  margin: 0 auto;
  padding: 2.5%;
  display: block;
}
.col-4 {
  width: 30%;
}
.col-6 {
  width: 40%;
}
.col-8 {
  width: 65%;
}
.col-12 {
  width: 92%;
}
.form-input,
#api-key {
  height: 5vh;
  line-height: 5vh;
  width: 95%;
  padding: 2.5%;
  margin: 0 auto;
  border: 1px solid pink;
}
@media only screen and (max-width: 768px) {
  .col-4 {
    width: 50%;
  }
  .col-6,
  .col-8 {
    width: 92%;
  }
}
@media only screen and (max-width: 768px) {
  .col-4 {
    width: 92%;
  }
}
</style>
