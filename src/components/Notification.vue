<template>
  <div>
    <div v-if="err" class="notification border error">
      <h3>{{text}}</h3>
    </div>
    <div v-else class="notification border">
      <h3>{{text}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    text: String,
    err: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 5%;
  right: -50%;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  text-transform: capitalize;
  min-width: 25vw;
  padding: 1rem;
  background: rgb(151, 192, 230);
  color: rgb(230, 230, 230);
  border: 3px solid rgb(230, 230, 230);
  animation-name: show-and-hide;
  animation-duration: 5s;
}
.notification.error {
  background: rgb(240, 37, 37);
}
@keyframes show-and-hide {
  0% {
    right: -50%;
  }
  10% {
    right: 5%;
  }
  90% {
    right: 5%;
  }
  100% {
    right: -50%;
  }
}
</style>