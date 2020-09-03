<template>
  <div id="credits">
    <section class="credit-section shadow">
      <OptionHeader option="Character Information Sources" />
      <div class="sources bg-color border">
        <ul>
          <li>
            <a
              href="https://avatar.fandom.com/wiki/Avatar_Wiki"
              target="_blank"
              rel="noreferrer"
            >Avatar Fandom</a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender"
              target="_blank"
              rel="noreferrer"
            >Wikipedia - The Last Airbender</a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/The_Legend_of_Korra"
              target="_blank"
              rel="noreferrer"
            >Wikipedia - The Legend of Korra</a>
          </li>
          <li>
            <a
              href="http://www.nick.co.uk/shows/avatar/q03fvj"
              target="_blank"
              rel="noreferrer"
            >Nickelodeon - The Last Airbender</a>
          </li>
          <li>
            <a
              href="http://www.nick.co.uk/shows/legend-of-korra/65kecx"
              target="_blank"
              rel="noreferrer"
            >Nickelodeon - The Legend of Korra</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="credit-section shadow">
      <OptionHeader option="Quote Information Sources" />
      <div class="sources bg-color border">
        <ul>
          <li>
            <a
              href="https://avatar.fandom.com/wiki/Avatar_Wiki"
              target="_blank"
              rel="noreferrer"
            >Avatar Fandom</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="credit-section shadow">
      <OptionHeader option="Episode Information Sources" />
      <div class="sources bg-color border">
        <ul>
          <li>
            <a
              href="https://avatar.fandom.com/wiki/Avatar_Wiki"
              target="_blank"
              rel="noreferrer"
            >Avatar Fandom</a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender"
              target="_blank"
              rel="noreferrer"
            >Wikipedia - The Last Airbender</a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/The_Legend_of_Korra"
              target="_blank"
              rel="noreferrer"
            >Wikipedia - The Legend of Korra</a>
          </li>
          <li>
            <a
              href="https://www.netflix.com/title/70142405"
              target="_blank"
              rel="noreferrer"
            >Netflix - The Last Airbender</a>
          </li>
          <li>
            <a
              href="https://www.netflix.com/title/80027563"
              target="_blank"
              rel="noreferrer"
            >Netflix - The Legend of Korra</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import OptionHeader from "./OptionHeader";
export default {
  name: "Credits",
  components: {
    OptionHeader
  }
};
</script>

<style scoped>
#credits {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20vh;
}
.credit-section {
  width: 27%;
}
.sources {
  padding: 2.5%;
  width: 95%;
  text-align: center;
}
li {
  list-style: none;
}
@media only screen and (max-width: 500px) {
  #credits {
    display: inline-block;
  }
  .credit-section {
    width: 100%;
  }
}
</style>