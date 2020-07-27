<template>
  <nav>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <ul class="links">
      <li>Details</li>
      <li>Examples</li>
      <li>API Key</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String
  }
};
</script>

<style scoped>
nav {
  width: 99.6vw;
  min-height: 10vh;
  border: 0.2vw solid pink;
  display: block;
}
.title,
.links {
  height: 40%;
  padding: 1.25% 0;
  display: flex;
}
.title {
  justify-content: center;
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