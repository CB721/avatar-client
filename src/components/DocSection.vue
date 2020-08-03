<template>
  <section class="docs">
    <header>
      <h3 class="route-name">Main Route: {{content.mainRoute}}</h3>
      <p class="request-type">Request Type: {{content.requestType}}</p>
    </header>
    <div class="sub-routes">
      <div v-if="content.subRoutes.all" class="sub-route">
        <p class="route">Sub Route: {{content.subRoutes.all.route}}</p>
        <div v-if="content.subRoutes.all.description">
          <p class="desc">Description: {{content.subRoutes.all.description}}</p>
        </div>
        <div v-if="content.subRoutes.all.example">
          <p class="example">{{content.subRoutes.all.example}}</p>
        </div>
        <div v-if="content.subRoutes.all.body">
          <p class="params-header">Body</p>
          <div
            v-for="(bodyDetails, bodyName) in content.subRoutes.all.body"
            v-bind:key="bodyName"
            class="param"
          >
            <p class="param-head">
              Key:
              <em>{{ bodyName }}</em>
            </p>
            <div v-for="(detail, name) in bodyDetails" v-bind:key="name">{{name}}: {{detail}}</div>
          </div>
        </div>
        <div v-if="content.subRoutes.all.params">
          <p class="params-header">Parameters</p>
          <div
            v-for="(paramDetails, paramName) in content.subRoutes.all.params"
            v-bind:key="paramName"
            class="param"
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
  border: 0.1vw solid pink;
}
header {
  width: 100%;
  text-align: center;
  height: 1rem;
  line-height: 2rem;
  margin-bottom: 7.5vh;
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
  border: 1px solid pink;
}
.route {
  width: 100%;
}
.params-header,
.param-head {
  text-align: center;
}
.param {
  width: 90%;
  padding: 5%;
  border: 1px solid pink;
}
</style>