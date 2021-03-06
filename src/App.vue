<template>
  <div id="app">
    <Background v-bind="{ avatar: title }" />
    <Navbar v-bind="{ title: title, scrollToSection: scrollToSection }" />
    <HeadSection name="About" />
    <div class="row">
      <div class="col-12">
        <section id="about-section" class="bg-color border shadow">
          <p>
            A collection of information from the TV shows
            <a
              href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender"
              target="_blank"
              rel="noopener"
              >Avatar: The Last Airbender</a
            >
            and
            <a
              href="https://en.wikipedia.org/wiki/The_Legend_of_Korra"
              target="_blank"
              rel="noopener"
              >Avatar: The Legend of Korra</a
            >
            . Get details on the characters, episodes and seasons. All
            available without signing up for an API key!
          </p>
          <p>
            The main purpose of this API to generate a random quote from the
            show. There are over 500 quotes between all of the characters. You
            can filter these quotes by character, episode or season. In order
            get access to the quotes, an API key is required. Request a new
            <a href="#get-key">API key</a> today!
          </p>
          <p>
            All of the information is returned as JSON. If you request data in a
            different format, you will not receive the applicable information.
          </p>
        </section>
        <Endpoint />
      </div>
    </div>
    <HeadSection name="Docs" />
    <div class="row">
      <div class="col-12">
        <div id="docs-section" />
        <div v-if="docs.length">
          <div v-for="(doc, index) in docs" v-bind:key="index">
            <DocSection v-bind="{ content: doc }" />
          </div>
        </div>
      </div>
    </div>
    <Endpoint />
    <HeadSection name="Examples" />
    <div class="row">
      <div class="col-4">
        <div id="example-section" />
        <OptionHeader option="Category" />
        <FilterSection
          v-bind="{ filters: filters, action: categoryFilter }"
          section="option"
        />
      </div>
      <div v-if="selectedFilters.length" class="col-4">
        <OptionHeader option="Sort By" />
        <FilterSection
          v-bind="{ filters: selectedFilters, action: sortByFilter }"
          section="filter"
        />
      </div>
      <div v-if="finalFilter.length" class="col-4">
        <OptionHeader option="Filter" />
        <FilterSection v-bind="{ filters: finalFilter, action: getResults }" />
      </div>
    </div>
    <Endpoint />
    <div class="row">
      <div class="col-12">
        <div id="results" />
        <Results
          v-bind="{ results: results, explanation: explanation, query: query }"
        />
      </div>
    </div>
    <div id="get-key" />
    <HeadSection name="Get API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Sign Up" />
        <form>
          <label for="create-email">Enter your email</label>
          <input
            v-model="user.email"
            placeholder="toph@teamavatar.com"
            autocomplete="email"
            id="create-email"
            class="form-input border shadow"
            ref="createEmail"
            type="email"
          />
          <label for="first-name">Enter your first name</label>
          <input
            v-model="user.first_name"
            placeholder="Toph"
            autocomplete="given-name"
            id="first-name"
            class="form-input border shadow"
            ref="first_name"
            type="text"
          />
          <label for="last-name">Enter your last name</label>
          <input
            v-model="user.last_name"
            placeholder="Beifong"
            autocomplete="family-name"
            id="last-name"
            class="form-input border shadow"
            ref="last_name"
            type="text"
          />
        </form>
        <button class="submit-form border shadow" v-on:click="signUp">
          Sign Up
        </button>
      </div>
      <div v-if="user.key" class="col-6">
        <div class="col-12">
          <OptionHeader option="Your API key" />
          <div class="border bg-color signup-results">
            <p class="api-key" aria-label="New API key">{{ user.key }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="update-key" />
    <HeadSection name="Request a new API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Your details" />
        <form>
          <label for="update-email">Enter your email</label>
          <input
            v-model="user.email"
            placeholder="toph@teamavatar.com"
            autocomplete="email"
            id="update-email"
            class="form-input border shadow"
            ref="updateEmail"
            type="update-email"
          />
          <label for="updateKey">Enter your current API key</label>
          <input
            v-model="user.tempKey"
            placeholder="abcdefghijklmnopqrstuvwxyandz"
            class="form-input border shadow key"
            ref="updateKey"
            id="updateKey"
            type="text"
          />
        </form>
        <button
          class="submit-form border shadow"
          v-on:click="updateDeleteKey($event, true)"
        >
          Get a New Key
        </button>
      </div>
      <div v-if="user.key" class="col-6">
        <div class="col-12">
          <OptionHeader option="Your API key" />
          <div class="border bg-color signup-results">
            <p class="api-key" aria-label="Updated API key">{{ user.key }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="delete-key" />
    <HeadSection name="Delete an existing API Key" />
    <div class="row">
      <div class="col-6">
        <OptionHeader option="Your details" />
        <form>
          <label for="delete-email">Enter your email</label>
          <input
            v-model="user.email"
            placeholder="toph@teamavatar.com"
            autocomplete="email"
            id="delete-email"
            class="form-input border shadow"
            ref="deleteEmail"
            type="email"
          />
          <label for="deleteKey">Enter your current API key</label>
          <input
            v-model="user.tempKey"
            placeholder="abcdefghijklmnopqrstuvwxyandz"
            class="form-input border shadow key"
            ref="deleteKey"
            id="deleteKey"
            type="text"
          />
        </form>
        <button
          class="submit-form border shadow"
          v-on:click="updateDeleteKey($event, false)"
        >
          Delete your key
        </button>
      </div>
      <div v-if="user.isDeleted">
        <div class="col-6">
          <OptionHeader
            option="Your API key has successfully been deleted..."
          />
        </div>
      </div>
    </div>
    <HeadSection name="Credits" />
    <div class="row">
      <div class="col-12">
        <Credits />
      </div>
    </div>
    <Footer />
    <div v-if="notificationText">
      <Notification v-bind="{ text: notificationText, err: formError }" />
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
import Credits from "./components/Credits";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import Endpoint from "./components/Endpoint";
import API from "./utils/api";
import { create, covertToLowerCase } from "./utils/query";
import isEmail from "validator/lib/isEmail";

document.addEventListener("mousemove", (event) => {
  // get the window dimensions and select the halfway point
  let midX = window.innerWidth / 2;
  let midY = window.innerHeight / 2;
  // get the position of the mouse
  let posX = event.clientX;
  let posY = event.clientY;
  // get percentage of difference compared to halfway point
  let xPercent = posX / midX - 1;
  let yPercent = posY / midY - 1;
  let xCSS = ((xPercent * 30).toFixed(4) * -1).toString() + "px";
  let yCSS = (((yPercent * 75).toFixed(4) + 25) * -1).toString() + "px";

  document.documentElement.style.setProperty("--vertical", yCSS);
  document.documentElement.style.setProperty("--horizontal", xCSS);
});

export default {
  name: "App",
  components: {
    Navbar,
    HeadSection,
    OptionHeader,
    FilterSection,
    Results,
    DocSection,
    Background,
    Credits,
    Footer,
    Notification,
    Endpoint,
  },
  created() {
    API.docs()
      .then((res) => {
        this.docs = res.data;
      })
      .catch((err) => console.log(err));
    const randNum = Math.round(Math.random());
    if (randNum) this.title = "Avatar: The Last API";
    else this.title = "Avatar: The Legend of the API";
    document.title = this.title;
  },
  data() {
    return {
      title: "",
      notificationText: "",
      filters: [
        {
          name: "Characters",
          multipleFilters: false,
          filter: ["all", "element"],
        },
        {
          name: "Quotes",
          multipleFilters: true,
          filter: ["all", "charid", "episodeid", "seasonid"],
        },
        {
          name: "Elements",
          multipleFilters: false,
          filter: ["all"],
        },
        {
          name: "Episodes",
          multipleFilters: false,
          filter: ["all"],
        },
        {
          name: "Seasons",
          multipleFilters: false,
          filter: ["all"],
        },
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
        tempKey: "",
        isDeleted: false,
      },
      formError: false,
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
        this.explanation = "An API key is required in the request header.";
        this.notificationText =
          "Don't forget to use an API key in the request header!";
      } else {
        this.explanation = "";
      }
    },
    signUp(event) {
      event.preventDefault();
      if (!this.user.email) {
        this.formError = true;
        this.notificationText = "Email required";
        this.$refs.createEmail.focus();
      } else if (!isEmail(this.user.email)) {
        this.formError = true;
        this.notificationText = "Invalid email";
        this.$refs.createEmail.focus();
      } else if (!this.user.first_name) {
        this.formError = true;
        this.notificationText = "First name required";
        this.$refs.first_name.focus();
      } else if (!this.user.last_name) {
        this.formError = true;
        this.notificationText = "Last name required";
        this.$refs.last_name.focus();
      } else {
        this.user.deleted = false;
        this.user = covertToLowerCase(this.user);
        API.createUser(this.user)
          .then(({ data }) => {
            this.user.key = data[0].api_key;
            this.notificationText = "Welcome to team avatar!";
            this.formError = false;
          })
          .catch((err) => {
            this.formError = true;
            if (err.response.status == "409") {
              this.notificationText = "Email already exists";
              this.$refs.email.focus();
            } else {
              if (this.title === "Avatar: The Last API") {
                this.notificationText =
                  "Ozai is blocking your path!  Please try again.";
              } else {
                this.notificationText =
                  "Zaheer is blocking your path!  Please try again.";
              }
            }
          });
      }
    },
    updateDeleteKey(event, isUpdate) {
      event.preventDefault();
      if (!this.user.email) {
        this.formError = true;
        this.notificationText = "Email required";
        isUpdate
          ? this.$refs.updateEmail.focus()
          : this.$refs.deleteEmail.focus();
      } else if (!isEmail(this.user.email)) {
        this.formError = true;
        this.notificationText = "Invalid email";
        isUpdate
          ? this.$refs.updateEmail.focus()
          : this.$refs.deleteEmail.focus();
      } else if (!this.user.tempKey) {
        this.formError = true;
        this.notificationText = "API key required";
        isUpdate ? this.$refs.updateKey.focus() : this.$refs.deleteKey.focus();
      } else {
        this.formError = false;
        const updateObj = covertToLowerCase({
          email: this.user.email,
          key: this.user.tempKey,
        });
        if (isUpdate) {
          this.user.deleted = false;
          API.updateUser(updateObj)
            .then(({ data }) => {
              this.user.key = data[0].api_key;
            })
            .catch((err) => {
              this.formError = true;
              if (
                err.response.data === "Invalid API key" ||
                err.response.data === "Email and API key required"
              ) {
                this.notificationText = "Invalid API key";
                this.$refs.updateKey.focus();
              } else if (err.response.data === "Invalid email") {
                this.notificationText = "Invalid email";
                this.$refs.updateEmail.focus();
              } else if (err.response.data === "User not found") {
                this.notificationText = "User not found";
                this.$refs.updateEmail.focus();
              } else {
                if (this.title === "Avatar: The Last API") {
                  this.notificationText =
                    "Ozai is blocking your path!  Please try again.";
                } else {
                  this.notificationText =
                    "Zaheer is blocking your path!  Please try again.";
                }
              }
            });
        } else {
          API.deleteUser(updateObj)
            .then(() => {
              this.user.isDeleted = true;
            })
            .catch((err) => {
              if (
                err.response.data === "Invalid API key" ||
                err.response.data === "Email and API key required"
              ) {
                this.notificationText = "Invalid API key";
                this.$refs.deleteKey.focus();
              } else if (err.response.data === "Invalid email") {
                this.notificationText = "Invalid email";
                this.$refs.deleteEmail.focus();
              } else if (err.response.data === "User not found") {
                this.notificationText = "User not found";
                this.$refs.deleteEmail.focus();
              } else {
                if (this.title === "Avatar: The Last API") {
                  this.notificationText =
                    "Ozai is blocking your path!  Please try again.";
                } else {
                  this.notificationText =
                    "Zaheer is blocking your path!  Please try again.";
                }
              }
            });
        }
      }
    },
    scrollToSection(id) {
      const section = document.getElementById(id);

      section.scrollIntoView({ behavior: "smooth" });
    },
  },
  watch: {
    results() {
      if (this.results.length) {
        this.scrollToSection("results");
      }
    },
    notificationText() {
      if (this.notificationText) {
        setTimeout(() => {
          this.notificationText = "";
        }, 6000);
      }
    },
    selectedFilters() {
      this.finalFilter = [];
      this.results = [];
      this.query = {}
    },
    sortBySelection() {
      if (!this.sortBySelection) return;
      this.results = [];
      if (this.categorySelection === "Characters") {
        if (this.sortBySelection === "all") {
          API.allCharacters()
            .then((res) => {
              this.finalFilter = res.data;
            })
            .catch((err) => console.log(err));
        } else if (this.sortBySelection === "element") {
          API.allElements()
            .then((res) => {
              this.finalFilter = res.data;
              this.results = res.data;
            })
            .catch((err) => console.log(err));
        }
      } else if (this.categorySelection === "Quotes") {
        switch (this.sortBySelection) {
          case "all":
            this.finalFilter = [{ title: "random" }];
            break;
          case "charid":
            // only show characters from the dummy quote data
            this.finalFilter = API.quoteCharacters();
            break;
          case "episodeid":
            this.finalFilter = API.quotesEpisodes();
            break;
          case "seasonid":
            this.finalFilter = [
              {
                season_num: 1,
                title: "Book 1: Water",
              },
            ];
            break;
          default:
            return;
        }
      } else if (this.categorySelection === "Elements") {
        API.allElements()
          .then((res) => {
            this.finalFilter = res.data;
            this.results = res.data;
          })
          .catch((err) => console.log(err));
      } else if (this.categorySelection === "Episodes") {
        API.allEpisodes()
          .then((res) => {
            this.finalFilter = res.data;
          })
          .catch((err) => console.log(err));
      } else if (this.categorySelection === "Seasons") {
        API.allSeasons()
          .then((res) => {
            this.finalFilter = res.data;
          })
          .catch((err) => console.log(err));
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
              .then((res) => {
                this.results = [res.data];
              })
              .catch((err) => console.log(err));
          } else {
            API.allCharacters(id)
              .then((res) => {
                this.results = res.data;
              })
              .catch((err) => console.log(err));
          }
          break;
        case "Quotes":
          this.results = API.quotes();
          break;
        case "Episodes":
          API.oneEpisode(id)
            .then((res) => {
              this.results = [res.data];
            })
            .catch((err) => console.log(err));
          break;
        case "Seasons":
          API.oneSeason(id)
            .then((res) => {
              this.results = [res.data];
            })
            .catch((err) => console.log(err));
          break;
        default:
          return;
      }
    },
  },
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
    rgb(15, 15, 15) 0%,
    rgb(8, 38, 99) 25%,
    rgb(29, 72, 160) 50%,
    rgb(75, 29, 160) 75%,
    rgb(142, 119, 212) 100%
  );
  box-shadow: inset 0 0 100px rgb(39, 38, 38);
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  position: relative;
}
* {
  margin: 0;
  padding: 0;
}
a {
  color: rgb(39, 38, 38);
}
a:visited {
  color: rgb(151, 192, 230);
}
.bg-color {
  background: rgb(230, 230, 230);
  color: rgb(39, 38, 38);
}
.bg-color-black {
  background: rgb(39, 38, 38);
  color: rgb(230, 230, 230);
}
.border {
  border-radius: 0.25rem;
  border: none;
}
.shadow {
  box-shadow: var(--horizontal, "0px") var(--vertical, "0px") 10px -10px #22222232;
  -moz-box-shadow: var(--horizontal, "0px") var(--vertical, "0px") 10px 10px
    #22222232;
  box-shadow: var(--horizontal, "0px") var(--vertical, "0px") 10px 10px
    #22222232;
  margin: 75px 0;
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
form {
  width: 100%;
  margin: 0 auto;
}
.form-input,
.api-key,
.submit-form {
  margin: 2.5vh auto;
}
.form-input,
.api-key {
  height: 5vh;
  line-height: 5vh;
  padding: 2.5%;
  width: calc(95% - 6px);
}
.form-input:focus,
.submit-form:focus {
  outline: none !important;
  border: 3px solid rgb(0, 195, 255);
  transition: 0.3s;
}
.form-input,
.submit-form {
  background: rgb(230, 230, 230);
  color: rgb(39, 38, 38);
  border: 3px solid transparent;
}
.submit-form {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
}
.api-key {
  text-align: center;
}
#about-section {
  text-align: center;
  line-height: 2rem;
  padding: 1rem 0;
}
#about-section p {
  padding: 1rem;
}
.signup-results {
  width: 100%;
  line-height: 5vh;
  height: calc(5vh + 5%);
}
@media only screen and (max-width: 768px) {
  .row {
    display: block;
  }
  .col-4 {
    width: 50%;
  }
  .col-6,
  .col-8 {
    width: 92%;
  }
}
@media only screen and (max-width: 500px) {
  .col-4 {
    width: 92%;
  }
}
</style>
