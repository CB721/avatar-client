<template>
  <div id="app">
    <Navbar title="Avatar: The API" />
    <HeadSection name="Details" />
    <div class="row">
      <div class="col-12">
        <section id="detail-section">
          <p>
            Aenean vel leo fermentum, aliquam est eu, faucibus quam. Aliquam erat volutpat. Aenean consectetur risus scelerisque, cursus ante quis, finibus lacus. Sed aliquet scelerisque nisi, a ornare metus cursus et. Sed non metus laoreet, iaculis orci quis, vestibulum metus. Nunc fermentum hendrerit magna, non venenatis lectus maximus vitae. Fusce nisi quam, sollicitudin nec dapibus in, pretium vitae lorem. Ut vitae turpis et massa rutrum tristique. Duis gravida pulvinar ipsum, ut rutrum tellus luctus vitae. Curabitur tortor mi, fermentum in lacus vitae, fermentum lobortis leo. Cras vitae volutpat tortor. Maecenas dignissim dolor non nisl aliquet volutpat sed et quam.
          </p>
          <br>
          <p>
            Aenean odio quam, hendrerit at odio et, ultricies auctor lacus. Aliquam erat volutpat. Proin nec viverra metus, sed cursus magna. Pellentesque lorem elit, maximus commodo lectus in, elementum malesuada magna. Praesent nec sollicitudin sem. Integer vehicula turpis ut lacus faucibus condimentum. Pellentesque ornare nisl sed nibh ullamcorper porttitor. Pellentesque rutrum consequat tellus at sollicitudin. Pellentesque maximus tristique urna, et pellentesque enim pellentesque in. Praesent efficitur risus et tellus molestie mollis.
          </p>
          <br>
          <p>
            Fusce dictum velit massa. Nulla facilisi. Cras augue massa, bibendum a gravida a, egestas in leo. Morbi ultricies facilisis neque et imperdiet. Mauris scelerisque ipsum et augue consequat, in dapibus velit accumsan. Vestibulum augue neque, vulputate vel lorem id, cursus ultricies nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed semper orci.
          </p>
          <br>
          <p>
            Donec fermentum molestie nisl non vestibulum. Cras tempus tincidunt odio, nec finibus dui consectetur ac. Fusce eget purus neque. Integer luctus felis non nisl ultrices semper sagittis a quam. Mauris rutrum tempor lectus, molestie molestie nisl varius in. Etiam eleifend odio quis est maximus, eget vestibulum orci vestibulum. Etiam eu leo maximus, suscipit nibh id, condimentum metus. Aliquam erat volutpat. Sed quis justo mi. Vestibulum in magna diam. Integer volutpat aliquet dolor sit amet euismod. Nulla egestas maximus nibh eu cursus. Vivamus est nisl, tempor sit amet rutrum sed, vestibulum sit amet purus. Curabitur et porttitor magna. Aenean mattis sodales venenatis.
          </p>
          <br>
          <p>
            Curabitur ut velit et tellus viverra interdum. Etiam rutrum justo sit amet nisl tristique dapibus. Donec congue nisi ac nisi tincidunt, eget varius lacus efficitur. Sed interdum sagittis tincidunt. In hac habitasse platea dictumst. Aenean interdum neque ante, eget vulputate leo venenatis in. Suspendisse egestas lectus diam, a posuere felis luctus non. Phasellus pellentesque sed est a lacinia. Maecenas a sapien sapien. Nam lacinia suscipit mauris, sit amet rhoncus nisl commodo nec.
          </p>
          <br>
          <p>
            Mauris at elit efficitur quam pulvinar hendrerit sit amet at lacus. Curabitur ac tortor suscipit lectus dignissim fermentum. Suspendisse accumsan ex ex, ac egestas diam pulvinar ac. Pellentesque sagittis diam justo, sed pretium sapien venenatis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultricies metus. Proin nec blandit urna. In mattis nec nulla in vestibulum. Fusce ut efficitur purus.
          </p>
        </section>
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
        <Results
          v-bind="{results: results, explanation: explanation, query: query}"
        />
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
import Results from "./components/Results";
import API from "./utils/api";
import { create } from "./utils/query";

export default {
  name: "App",
  components: {
    Navbar,
    HeadSection,
    OptionHeader,
    FilterSection,
    Results
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
      explanation: ""
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
      if (this.categorySelection === "Quotes"){
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
        switch(this.sortBySelection) {
          case "all":
              this.finalFilter = [{title: "random"}];
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
      if (!this.finalSelection || !this.sortBySelection || !this.categorySelection) return;
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
#email-input, #api-key {
  height: 5vh;
  line-height: 5vh;
  width: 95%;
  padding: 2.5%;
  margin: 0 auto;
  border: 1px solid pink;
}
</style>
