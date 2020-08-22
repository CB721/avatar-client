<template>
  <section class="docs">
    <header class="bg-color border shadow">
      <h3 class="route-name"><u>Main Route: {{content.mainRoute}}</u></h3>
      <p class="request-type">Request Type: {{content.requestType}}</p>
    </header>
    <div class="sub-routes">
      <div v-if="content.subRoutes.all" class="sub-route bg-color border shadow">
        <p class="route"><strong>Sub Route: {{content.subRoutes.all.route}}</strong></p>
        <div v-if="content.subRoutes.all.description">
          <p class="desc">Description: {{content.subRoutes.all.description}}</p>
        </div>
        <div v-if="content.subRoutes.all.example">
          <p class="example">Example: {{content.subRoutes.all.example}}</p>
        </div>
        <div v-if="content.subRoutes.all.body">
          <p class="params-header">
            <strong>Body</strong>
          </p>
          <div
            v-for="(bodyDetails, bodyName) in content.subRoutes.all.body"
            v-bind:key="bodyName"
            class="param bg-color-black border"
          >
            <p class="param-head">
              Key:
              <em>{{ bodyName }}</em>
            </p>
            <div v-for="(detail, name) in bodyDetails" v-bind:key="name">{{name}}: {{detail}}</div>
          </div>
        </div>
        <div v-if="content.subRoutes.all.params">
          <p class="params-header">
            <strong>Parameters</strong>
          </p>
          <div
            v-for="(paramDetails, paramName) in content.subRoutes.all.params"
            v-bind:key="paramName"
            class="param bg-color-black border"
          >
            <p class="param-head">
              Param:
              <em>{{ paramName }}</em>
            </p>
            <div v-for="(detail, name) in paramDetails" v-bind:key="name">{{name}}: {{detail}}</div>
          </div>
        </div>
      </div>
      <div v-if="content.subRoutes.one" class="sub-route bg-color border shadow">
        <p class="route"><strong>Sub Route: {{content.subRoutes.one.route}}</strong></p>
        <div v-if="content.subRoutes.one.description">
          <p class="desc">Description: {{content.subRoutes.one.description}}</p>
        </div>
        <div v-if="content.subRoutes.one.example">
          <p class="example">{{content.subRoutes.one.example}}</p>
        </div>
        <div v-if="content.subRoutes.one.body">
          <p class="params-header">
            <strong>Body</strong>
          </p>
          <div
            v-for="(bodyDetails, bodyName) in content.subRoutes.one.body"
            v-bind:key="bodyName"
            class="param bg-color-black border"
          >
            <p class="param-head">
              Key:
              <em>{{ bodyName }}</em>
            </p>
            
            <div v-for="(detail, name) in bodyDetails" v-bind:key="name">{{name}}: {{detail}}</div>
          </div>
        </div>
        <div v-if="content.subRoutes.one.params">
          <p class="params-header">
            <strong>Parameters</strong>
          </p>
          <div
            v-for="(paramDetails, paramName) in content.subRoutes.one.params"
            v-bind:key="paramName"
            class="param bg-color-black border"
          >
            <p class="param-head">
              Param:
              <em>{{ paramName }}</em>
            </p>
            <div v-for="(detail, name) in paramDetails" v-bind:key="name">{{name}}: {{detail}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DocSection",
  props: {
    content: Object
  }
};
</script>

<style scoped>
.docs {
  margin: 2.5vh 12.5%;
  width: 75%;
}
header {
  width: 100%;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 10vh;
}
.route-name,
.request-type {
  width: 100%;
  margin-top: 2.5vh;
}
.sub-routes {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2.5vh;
}
.sub-route {
  width: 40%;
  padding: 0.5rem;
  background: rgb(230, 230, 230);
  margin-bottom: 10vh;
}
.route {
  width: 100%;
  text-align: center;
}
.params-header,
.param-head {
  text-align: center;
}
.params-header {
  margin: 2.5vh auto;
}
.param-head {
  margin-bottom: 2.5vh;
}
.param {
  width: 90%;
  padding: 5%;
}
.param:nth-child(2), .param:nth-child(3) {
  margin: 1rem 0;
}
@media only screen and (max-width: 500px) {
  .docs {
    margin: 2.5vh 1%;
    width: 98%;
  }
  header {
    margin-bottom: 12.5vh;
  }
  .sub-routes {
    width: 90%;
    display: inline-block;
    /* padding: 2%; */
    margin: 0 2.5%;
  }
  .sub-route {
    width: 100%;
  }
}
</style>