<template>
  <div id="app">
    <Background />
    <Navbar title="Avatar: The Last API" />
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
            <a
              href="#get-key"
            >API key</a> today!
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
    <div id="get-key" />
    <HeadSection name="Get API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Sign Up" />
        <div v-if="formError">
          <h3 id="form-error">
            <strong>{{formError}}</strong>
          </h3>
        </div>
        <form>
          <label for="email">Enter your email</label>
          <input
            v-model="user.email"
            placeholder="toph@teamavatar.com"
            autocomplete="email"
            id="email"
            class="form-input"
            ref="email"
            type="email"
          />
          <label for="first-name">Enter your first name</label>
          <input
            v-model="user.first_name"
            placeholder="Toph"
            autocomplete="given-name"
            id="first-name"
            class="form-input"
            ref="first_name"
            type="text"
          />
          <label for="last-name">Enter your last name</label>
          <input
            v-model="user.last_name"
            placeholder="Beifong"
            autocomplete="family-name"
            id="last-name"
            class="form-input"
            ref="last_name"
            type="text"
          />
        </form>
        <button class="submit-form" v-on:click="signUp">Sign Up</button>
      </div>
      <div class="col-6">
        <div v-if="user.key">
          <OptionHeader option="Your API key" />
          <p class="api-key">{{user.key}}</p>
        </div>
      </div>
    </div>
    <div id="update-key" />
    <HeadSection name="Request a new API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Your details" />
        <div v-if="formError">
          <h3 id="form-error">
            <strong>{{formError}}</strong>
          </h3>
        </div>
        <form>
          <label for="email">Enter your email</label>
          <input
            v-model="user.email"
            placeholder="toph@teamavatar.com"
            autocomplete="email"
            id="email"
            class="form-input"
            ref="email"
            type="email"
          />
          <label for="key">Enter your current API key</label>
          <input
            v-model="user.key"
            placeholder="abcdefghijklmnopqrstuvwxyandz"
            id="key"
            class="form-input"
            ref="key"
            type="text"
          />
        </form>
        <button class="submit-form" v-on:click="updateDeleteKey($event, true)">Get a New Key</button>
      </div>
      <div class="col-6">
        <div v-if="user.key">
          <OptionHeader option="Your API key" />
          <p class="api-key">{{user.key}}</p>
        </div>
      </div>
    </div>
    <div id="delete-key" />
    <HeadSection name="Delete an existing API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Your details" />
        <div v-if="formError">
          <h3 id="form-error">
            <strong>{{formError}}</strong>
          </h3>
        </div>
        <form>
          <label for="email">Enter your email</label>
          <input
            v-model="user.email"
            placeholder="toph@teamavatar.com"
            autocomplete="email"
            id="email"
            class="form-input"
            ref="email"
            type="email"
          />
          <label for="key">Enter your current API key</label>
          <input
            v-model="user.key"
            placeholder="abcdefghijklmnopqrstuvwxyandz"
            id="key"
            class="form-input"
            ref="key"
            type="text"
          />
        </form>
        <button class="submit-form" v-on:click="updateDeleteKey($event, false)">Delete your key</button>
      </div>
      <div class="col-6">
        <div v-if="user.isDeleted">
          <OptionHeader option="Your API key has successfully been deleted..." />
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
import Background from "./components/Background";
import API from "./utils/api";
import { create } from "./utils/query";
import isEmail from "validator/lib/isEmail";

export default {
  name: "App",
  components: {
    Navbar,
    HeadSection,
    OptionHeader,
    FilterSection,
    Results,
    DocSection,
    Background
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
      docs: [],
      user: {
        email: "",
        first_name: "",
        last_name: "",
        key: "",
        isDeleted: false
      },
      formError: ""
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
    },
    signUp(event) {
      event.preventDefault();
      if (!this.user.email) {
        this.formError = "Email required";
        this.$refs.email.focus();
      } else if (!isEmail(this.user.email)) {
        this.formError = "Invalid email";
        this.$refs.email.focus();
      } else if (!this.user.first_name) {
        this.formError = "First name required";
        this.$refs.first_name.focus();
      } else if (!this.user.last_name) {
        this.formError = "Last name required";
        this.$refs.last_name.focus();
      } else {
        this.formError = "";
        this.user.deleted = false;
        API.createUser(this.user)
          .then(({ data }) => {
            this.user.key = data.api_key;
          })
          .catch(err => {
            console.error(err);
            console.error(err.response);
            if (err.response.status == "409") {
              this.formError = "Email already exists";
              this.$refs.email.focus();
            } else {
              this.formError = "Server error.  Please try again";
            }
          });
      }
    },
    updateDeleteKey(event, isUpdate) {
      event.preventDefault();
      if (!this.user.email) {
        this.formError = "Email required";
        this.$refs.email.focus();
      } else if (!isEmail(this.user.email)) {
        this.formError = "Invalid email";
        this.$refs.email.focus();
      } else if (!this.user.key) {
        this.formError = "API key required";
        this.$refs.key.focus();
      } else {
        this.formError = "";
        const updateObj = {
          email: this.user.email,
          key: this.user.key
        };
        if (isUpdate) {
          this.user.deleted = false;
          API.updateUser(updateObj)
            .then(({ data }) => {
              console.log(data);
              this.user.key = data.api_key;
            })
            .catch(err => {
              console.error(err);
              console.error(err.response);
              if (err.response.data === "Invalid API key") {
                this.formError = "Invalid API key";
                this.$refs.key.focus();
              } else if (err.response.data === "Invalid email") {
                this.formError = "Invalid email";
                this.$refs.key.focus();
              } else if (err.response.data === "User not found") {
                this.formError = "User not found";
              } else {
                this.formError = "Server error.  Please try again";
              }
            });
        } else {
          API.deleteUser(updateObj)
            .then(() => (this.user.isDeleted = true))
            .catch(err => {
              console.error(err);
              console.error(err.response);
              if (err.response.data === "Invalid API key") {
                this.formError = "Invalid API key";
                this.$refs.key.focus();
              } else if (err.response.data === "Invalid email") {
                this.formError = "Invalid email";
                this.$refs.key.focus();
              } else if (err.response.data === "User not found") {
                this.formError = "User not found";
              } else {
                this.formError = "Server error.  Please try again";
              }
            });
        }
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
@font-face {
  font-family: "Avatar";
  src: url("./assets/avatar-fonts.ttf") format("truetype");
  font-display: swap;
}
body {
  background: rgb(93, 100, 93);
  background: linear-gradient(
    180deg,
     rgba(0,0,0,1) 0%,
    rgba(24,57,124,1) 10%,
    rgb(128, 111, 180) 20%,
    rgb(180, 158, 111) 30%,
    rgba(230, 211, 179, 1) 56%,
    rgba(238, 234, 187, 1) 60%,
    rgba(230, 218, 166, 1) 74%,
    rgba(220, 171, 94, 1) 87%,
    rgba(162, 108, 22, 1) 100%
  );
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow: hidden;
  position:relative;
}
* {
  margin: 0;
  padding: 0;
}

/* .section-bg {
  border-radius: 0.25rem;
  background: rgb(114, 57, 29);
  background: linear-gradient(
    180deg,
    rgba(114, 57, 29, 1) 0%,
    rgba(70, 27, 15, 1) 50%,
    rgba(50, 14, 8, 1) 100%
  );
} */
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
.api-key,
.submit-form {
  margin: 2.5vh auto;
  border: 1px solid pink;
}
.form-input,
.api-key {
  height: 5vh;
  line-height: 5vh;
  padding: 2.5%;
  width: 95%;
}
.submit-form {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
}
.form-error {
  text-align: center;
  margin: 2.5vh auto;
  color: red;
}
.api-key {
  text-align: center;
}
#about-section {
  text-align: center;
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