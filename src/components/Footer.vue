<template>
  <footer>
    <section>
      <span>Copyright &copy; {{year}} Clint Brodar</span>
    </section>
    <section>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/clint-brodar-b4233b177" target="_blank">
          <span class="fab fa-linkedin" />
          <span>LinkedIn</span>
        </a>
      </div>
      <div class="social-links">
        <a href="https://github.com/CB721" target="_blank">
          <span class="fab fa-github" />
          <span>GitHub</span>
        </a>
      </div>
      <div class="social-links">
        <a href="https://cb721.github.io/ClintBrodarPortfolio" target="_blank">
          <span class="fas fa-address-card" />
          <span>Portfolio</span>
        </a>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  created() {
    const currDate = new Date();
    const fullYear = currDate.getFullYear();
    this.year = fullYear;
  },
  data() {
    return {
      year: 2020
    };
  }
};
</script>

<style scoped>
footer {
  width: 100vw;
  height: 20vh;
  padding-bottom: 5vh;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background: rgba(39, 38, 38, 0);
  color: rgb(230, 230, 230);
  transition: 0.3s;
}
footer:hover {
  background: rgba(39, 38, 38, 1);
}
a {
  color: rgb(230, 230, 230);
}
section {
  width: 40%;
  padding: 5%;
  text-align: right;
}
section:first-child {
  text-align: left;
}
.social-links {
  width: 100%;
}
span {
  padding: 0.25rem;
}
@media only screen and (max-width: 500px) {
    section:first-child {
        text-align: center;
    }
}
</style>