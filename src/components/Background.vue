<template>
  <div>
    <div class="bg-side" id="left-side" />
    <div class="bg-side" id="right-side" />
    <div id="bottom" />
    <img
      src="../assets/images/aang-arrow.svg"
      alt="aang arrow"
      id="aang-arrow"
      loading="lazy"
      v-rellax="{speed: 5}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="front-mountains"
      id="right-mountain"
      loading="lazy"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="front-mountains"
      id="left-mountain"
      loading="lazy"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="mid-mountains"
      id="right-mid-mountain"
      loading="lazy"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="mid-mountains"
      id="left-mid-mountain"
      loading="lazy"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="far-mountains"
      id="right-far-mountain"
      loading="lazy"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="far-mountains"
      id="left-far-mountain"
      loading="lazy"
    />
    <img src="../assets/images/mountain2.svg" alt="mountain" id="center-mountain" loading="lazy" />
    <div v-if="avatar === 'Avatar: The Last API'">
      <img
        src="../assets/images/aang3.svg"
        alt="aang crouched with staff"
        id="avatar"
        loading="lazy"
      />
    </div>
    <div v-else>
      <img
        src="../assets/images/korra-mtn.svg"
        alt="korra jumping and bending elements"
        id="avatar"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Background",
  props: {
    avatar: String
  }
};
</script>

<style scoped>
.bg-side {
  position: fixed;
  width: 50vw;
  height: 100vh;
  top: 0;
  background: rgb(79, 79, 79);
  z-index: -103;
}
#left-side {
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(79, 79, 79, 0.04945728291316531) 0%,
    rgba(79, 79, 79, 0.26) 45%,
    rgba(0, 0, 0, 1) 100%
  );
}
#right-side {
  right: 0;
  background: linear-gradient(
    270deg,
    rgba(79, 79, 79, 0.04945728291316531) 0%,
    rgba(79, 79, 79, 0.26) 45%,
    rgba(0, 0, 0, 1) 100%
  );
}
#bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -102;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
#aang-arrow {
  position: absolute;
  z-index: -100;
  width: 85vw;
  top: -30%;
  left: 7.5%;
  bottom: 200;
  right: 0;
}
.front-mountains,
.mid-mountains,
.far-mountains {
  max-width: 50vw;
  position: absolute;
}
.front-mountains {
  z-index: -90;
  filter: grayscale(5%);
}
.mid-mountains {
  z-index: -102;
  filter: grayscale(25%);
}
.far-mountains {
  z-index: -103;
  filter: grayscale(35%);
}
#right-mountain {
  bottom: 0;
  right: -10%;
}
#right-mid-mountain {
  bottom: 0;
  right: -15%;
}
#right-far-mountain {
  bottom: 0;
  right: -5%;
}
#left-mountain {
  bottom: 0;
  left: -10%;
}
#left-mid-mountain {
  bottom: 0;
  left: -15%;
}
#left-far-mountain {
  bottom: 0;
  left: -5%;
}
#center-mountain {
  position: absolute;
  z-index: -99;
  bottom: 0;
  width: 100vw;
  left: 0;
}
#avatar {
  position: absolute;
  z-index: -99;
  bottom: 0;
  width: 100vw;
  left: 0;
}
@media only screen and (max-width: 500px) {
  #aang-arrow {
    top: -10%;
  }
  .front-mountains,
  .mid-mountains,
  .far-mountains {
    display: none;
  }
}
</style>