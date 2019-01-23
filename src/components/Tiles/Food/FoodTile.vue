<template>
  <div :class="getPosition">
    <h1 class="price">{{ price }}</h1>
    <div class="type" :class="getType()">
      <h2 class="name">{{ name }}</h2>
    </div>
    <div class="tileBody">
      <h3 class="preposition">dazu</h3>
      <h4 class="description">{{ description }}</h4>
      <FoodTileTagList :tags="tags"></FoodTileTagList>
    </div>
  </div>
</template>

<script>
import FoodTileTagList from "./FoodTileTagList";

export default {
  components: {
    FoodTileTagList
  },
  props: {
    display: Number,
    price: String,
    name: String,
    description: String,
    tags: Array
  },
  computed: {
    getPosition: function() {
      if (this.display === 0) {
        return "primary";
      } else if (this.display === 1) {
        return "secondary left";
      } else if (this.display === 2) {
        return "secondary right";
      }

      return "secondary none";
    }
  },
  methods: {
    getType() {
      if (this.tags.includes("vegan")) {
        return "vegan";
      } else if (this.tags.includes("vegetarian")) {
        return "vegetarian";
      } else if (this.tags.includes("renewable")) {
        return "renewable";
      } else if (this.tags.includes("wellfit")) {
        return "wellfit";
      }

      return "none";
    }
  }
};
</script>

<style>
.primary, .left {
  border-bottom: 1px solid #757575;
}

.secondary {
  width: 30%;
  margin: 1%;
  align-content: center;
  overflow: hidden;
  word-wrap: break-word;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-bottom: 10vh;
}

.none {
  position: absolute;
  display: none;
  left: 100%;
  animation-name: exitAnimation;
  animation-duration: 2s;
}

.primary .price {
  text-align: center;
  margin: 0;
  text-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
  word-wrap: break-word;
  hyphens: auto;
}

.primary .type {
  padding: 0.5em;
  padding: 0.5%;
  margin: 0;
  margin-top: 6px;
  margin-top: 0.5vh;
  box-shadow: 0px 0px 12px 1px rgba(60, 60, 60, 0.3);
}

.primary .vegan {
  background-color: rgb(90, 126, 29);
}

.primary .vegetarian {
  background-color: rgb(25, 206, 25);
}

.primary .renewable {
  background-color: rgb(27, 136, 209);
}

.primary .wellfit {
  background-color: rgb(249, 173, 70);
}

.primary .name {
  text-align: center;
  margin: 0;
  text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}

.primary .tileBody {
  position: absolute;
  max-width: 36%;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.primary .preposition {
  position: relative;
  text-align: center;
  margin: 0;
  margin-top: 24px;
  margin-top: 2vh;
  word-wrap: break-word;
  hyphens: auto;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.primary .description {
  position: relative;
  text-align: center;
  margin: 0 auto;
  word-wrap: break-word;
  hyphens: auto;
  width: 100%;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}

.secondary .price {
  font-size: 4em;
  font-size: 3.3vw;
  text-align: center;
  margin: 0;
  position: relative;
  word-wrap: break-word;
  hyphens: auto;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}

.fit .secondary .price {
  font-size: calc(1em + 2.5vw);
}

.secondary .type::before {
  content: "";
  display: block;
  height: 1px;
  max-width: 292px;
  width: 88%;
  margin: 4px auto;
  position: relative;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}

.secondary .type.vegan::before {
  background-color: rgb(90, 126, 29);
}

.secondary .type.vegetarian::before {
  background-color: rgb(25, 206, 25);
}

.secondary .type.renewable::before {
  background-color: rgb(27, 136, 209);
}

.secondary .type.wellfit::before {
  background-color: rgb(249, 173, 70);
}

.secondary .name {
  font-size: 2.625em;
  font-size: 2.1875vw;
  text-align: center;
  margin: 0;
  position: relative;
  word-wrap: break-word;
  hyphens: auto;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}

.fit .secondary .name {
  font-size: calc(1em + 1.5vw);
}

.secondary .tileBody {
  width: 100%;
}

.secondary .preposition {
  display: none;
}

.secondary .description {
  font-size: 2.25em;
  font-size: 1.875vw;
  text-align: center;
  margin: 10px auto;
  margin: 1vh auto;
  width: 96%;
  position: relative;
  word-wrap: break-word;
  hyphens: auto;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.fit .secondary .description {
  font-size: calc(1em + 0.8vw);
}

@media screen and (max-aspect-ratio: 11/8) {
  .primary .name {
    word-wrap: break-word;
    hyphens: auto;
  }

  .primary .tileBody {
    position: relative;
    max-width: 96%;
  }

  .secondary {
    width: 48%;
    margin-top: 0;
  }
}

@media screen and (max-aspect-ratio: 9/12) {
  .primary {
    padding-bottom: 2.5%;
  }

  .secondary {
    width: 100%;
    margin: 0 auto;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    float: none;
  }

  .right {
    margin-bottom: 10vh;
  }
}
</style>