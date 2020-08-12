<template>
  <div>
    <img
      src="../assets/images/aang-arrow.svg"
      alt="aang arrow"
      id="aang-arrow"
      v-rellax="{speed: 7}"
    />
    <img
      src="../assets/images/cloud-layer1.svg"
      alt="cloud"
      class="clouds front-clouds"
      id="cloud-front-right"
      v-rellax="{speed: -3}"
    />
    <img
      src="../assets/images/cloud-layer2.svg"
      alt="cloud"
      class="clouds mid-clouds"
      id="cloud-mid-right"
      v-rellax="{speed: 1}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="front-mountains"
      id="right-mountain"
      v-rellax="{speed: 3}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="front-mountains"
      id="left-mountain"
      v-rellax="{speed: 3}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="mid-mountains"
      id="right-mid-mountain"
      v-rellax="{speed: 5}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="mid-mountains"
      id="left-mid-mountain"
      v-rellax="{speed: 5}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="far-mountains"
      id="right-far-mountain"
      v-rellax="{speed: 7}"
    />
    <img
      src="../assets/images/mountain1.svg"
      alt="mountain"
      class="far-mountains"
      id="left-far-mountain"
      v-rellax="{speed: 7}"
    />
  </div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style scoped>
#aang-arrow {
  position: absolute;
  z-index: -100;
  width: 75vw;
  top: 0;
  left: 12.5%;
  bottom: 200;
  right: 0;
  overflow: hidden;
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
</style>