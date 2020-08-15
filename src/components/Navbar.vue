<template>
  <nav>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <ul class="links">
      <li v-on:click="scrollToSection('about-section')">About</li>
      <li v-on:click="scrollToSection('docs-section')">Docs</li>
      <li v-on:click="scrollToSection('example-section')">Examples</li>
      <div v-if="isExpanded">
        <select id="nav-dropdown" v-model="selected">
          <option disabled value>Please select one</option>
          <option class="key-option" value="get-key">Request API Key</option>
          <option class="key-option" value="update-key">Update an existing key</option>
          <option class="key-option" value="delete-key">Delete API Key</option>
        </select>
      </div>
      <div v-else>
        <li v-on:click="expandMenu">Key</li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String
  },
  data() {
    return {
      isExpanded: false,
      selected: ""
    };
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
    },
    expandMenu(event) {
      event.preventDefault();
      this.isExpanded = !this.isExpanded;
    }
  },
  watch: {
    selected() {
      this.scrollToSection(this.selected);
      this.isExpanded = false;
    }
  }
};
</script>

<style scoped>
nav {
  width: 100vw;
  min-height: 10vh;
  display: block;
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
  font-family: Avatar, Avenir, Helvetica, Arial, sans-serif;
}
.links {
  justify-content: space-evenly;
}
li {
  text-align: center;
  list-style: none;
}
h1 {
  font-size: 2rem;
}
</style>