<template>
  <div>
    <div class="bg-side" id="left-side" />
    <div class="bg-side" id="right-side" />
    <div id="bottom" />
    <img
      src="../assets/images/aang-arrow.svg"
      alt="aang arrow"
      id="aang-arrow"
      v-rellax="{speed: 3}"
    />
    <!-- <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="front-mountains"
      id="right-mountain"
      v-rellax="{speed: 2}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="front-mountains"
      id="left-mountain"
      v-rellax="{speed: 2}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="mid-mountains"
      id="right-mid-mountain"
      v-rellax="{speed: 4}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="mid-mountains"
      id="left-mid-mountain"
      v-rellax="{speed: 4}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="far-mountains"
      id="right-far-mountain"
      v-rellax="{speed: 6}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="far-mountains"
      id="left-far-mountain"
      v-rellax="{speed: 6}"
    />
    <img
      src="../assets/images/mountain2.svg"
      alt="mountain"
      id="center-mountain"
      v-rellax="{speed: 10}"
    />
    <img src="../assets/images/aang3.svg" alt="aang crouched" id="aang-intro" v-rellax="{speed: 7}" />-->
  </div>
</template>

<script>
export default {
  name: "Background"
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
.clouds {
  width: 100vw;
  position: absolute;
}
.front-clouds {
  z-index: -99;
  filter: grayscale(25%);
  top: 2%;
  right: 0;
  left: 0;
}
.mid-clouds {
  z-index: -101;
  filter: grayscale(50%);
  top: 5%;
  right: 0;
  left: 0;
}
.front-mountains,
.mid-mountains,
.far-mountains {
  height: 50vh;
  max-width: 50vw;
  position: absolute;
}
.front-mountains {
  z-index: -99;
}
.mid-mountains {
  z-index: -102;
  filter: grayscale(25%);
}
.far-mountains {
  z-index: -103;
  filter: grayscale(50%);
}
#right-mountain {
  top: 22%;
  right: 5%;
}
#right-mid-mountain {
  top: 21%;
  right: 15%;
}
#right-far-mountain {
  top: 20%;
  right: 0%;
}
#left-mountain {
  top: 22%;
  left: 5%;
}
#left-mid-mountain {
  top: 21%;
  left: 15%;
}
#left-far-mountain {
  top: 20%;
  left: 0;
}
#center-mountain {
  position: absolute;
  z-index: -99;
  top: 25%;
  width: 100vw;
  left: 0;
}
#aang-intro {
  position: absolute;
  z-index: -99;
  top: 20%;
  width: 100vw;
  left: 0;
}
@media only screen and (max-width: 500px) {
  #aang-arrow {
    top: 10%;
  }
}
</style>