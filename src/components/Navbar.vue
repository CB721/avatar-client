<template>
  <nav v-bind:class="scrollDirection">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <ul class="links">
      <li v-on:click="scrollToSection('about-section')">About</li>
      <li v-on:click="scrollToSection('docs-section')">Docs</li>
      <li v-on:click="scrollToSection('example-section')">Examples</li>
      <li v-if="isExpanded" id="nav-dropdown">
        <select v-model="selected" v-on:click="selectOption" class="border">
          <option disabled value>Please select one</option>
          <option class="key-option" value="get-key">Request API Key</option>
          <option class="key-option" value="update-key">Update an existing key</option>
          <option class="key-option" value="delete-key">Delete API Key</option>
        </select>
      </li>
      <li v-else id="nav-dropdown" v-on:click="expandMenu">Key</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
    scrollToSection: Function
  },
  data() {
    return {
      isExpanded: false,
      selected: "",
      scrollDirection: "up",
      lastPosition: 0,
      userIsSelecting: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let direction = window.scrollY - this.lastPosition;
      if (this.userIsSelecting) return;
      if (window.scrollY < 122) {
        this.scrollDirection = "up";
      } else if (direction < 0) {
        this.scrollDirection = "up bg";
      } else if (direction) {
        this.scrollDirection = "down";
      }
      this.lastPosition = window.scrollY;
    });
  },
  methods: {
    expandMenu(event) {
      event.preventDefault();
      this.isExpanded = !this.isExpanded;
    },
    selectOption() {
      this.userIsSelecting = !this.userIsSelecting;
    }
  },
  watch: {
    selected() {
      if (this.selected) {
        this.scrollToSection(this.selected);
        this.selected = "";
        this.userIsSelecting = false;
        this.isExpanded = false;
      }
    }
  }
};
</script>

<style scoped>
nav {
  width: 100vw;
  min-height: 10vh;
  display: block;
  position: -webkit-sticky;
  position: sticky;
  transition: 0.25s;
  top: 0;
}
.up {
  color: rgb(230, 230, 230);
  visibility: visible;
}
.bg {
  background: rgb(39, 38, 38);
}
.down {
  color: transparent;
  visibility: hidden;
}
li:hover,
.key-option {
  cursor: pointer;
}
.title,
.links {
  height: 40%;
  padding: 1.25% 0;
  display: flex;
}
.title {
  justify-content: center;
  text-align: center;
  font-family: Avatar, Avenir, Helvetica, Arial, sans-serif;
  font-display: swap;
}
.links {
  justify-content: space-evenly;
}
li {
  text-align: center;
  list-style: none;
  width: 25%;
}
h1 {
  font-size: 2rem;
}
#nav-dropdown {
  width: 25%;
  display: flex;
  justify-content: center;
}
select {
  background: rgb(230, 230, 230);
  color: rgb(39, 38, 38);
  width: 75%;
}
select:focus {
  outline: none !important;
  border: 3px solid rgb(0, 195, 255);
  box-shadow: 0 0 0.25rem #dfe0e0;
  transition: 0.3s;
}
</style>