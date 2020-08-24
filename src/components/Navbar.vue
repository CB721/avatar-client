<template>
  <nav>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <ul class="links">
      <li v-on:click="scrollToSection('about-section')">About</li>
      <li v-on:click="scrollToSection('docs-section')">Docs</li>
      <li v-on:click="scrollToSection('example-section')">Examples</li>
      <div v-if="isExpanded" id="nav-dropdown">
        <select v-model="selected" class="border">
          <option disabled value>Please select one</option>
          <option class="key-option" value="get-key">Request API Key</option>
          <option class="key-option" value="update-key">Update an existing key</option>
          <option class="key-option" value="delete-key">Delete API Key</option>
        </select>
      </div>
      <div v-else id="nav-dropdown">
        <li v-on:click="expandMenu">Key</li>
      </div>
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
      selected: ""
    };
  },
  methods: {
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