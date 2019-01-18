<template>
<div :class="display">
  <h1 class="price">{{ price }}</h1>
  <div class="type" :class="getType">
    <h2 class="name">{{ name }}</h2>
  </div>
  <div class="tileBody">
    <h3 class="preposition">dazu</h3>
    <h4 class="description">{{ description }}</h4> 
    <div class="tagContainer"></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    display: String,
    price: String,
    name: String,
    description: String,
    tags: Array
  },
  computed: {
    getType: function () {
      var type = "none";
      if (this.tags.includes("vegan")) {
        type = "vegan"
      }
      else if (this.tags.includes("vegetarian")) {
        type = "vegetarian"
      }
      else if (this.tags.includes("renewable")) {
        type = "renewable"
      }
      else if (this.tags.includes("wellfit")) {
        type = "wellfit"
      }
      return type;
    }
  },
  methods: {
    
  },
  mounted() {

  },
  data() {
    return {

    }
  }
};
</script>

<style>
.left {
  align-content: center;
  width: 30%;
  height: 500px;
  word-wrap: break-word;
  float: left;
  margin-top: 32px;
  margin-top: 3vh;
  margin-left: 1vw;
  margin-right: 1vw;
  left: 0;
}

.right {
  align-content: center;
  width: 30%;
  overflow: hidden;
  word-wrap: break-word;
  float: right;
  margin-top: 32px;
  margin-top: 3vh;
}

.none {
  align-content: center;
  width: 30%;
  word-wrap: break-word;
  float: left;
  margin-top: 32px;
  margin-top: 3vh;
  left: -50px;
  animation-name: exitAnimation;
  animation-duration: 2s;
}

.primary .price {
  text-align: center;
  margin: 0;
  text-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
}

.primary .type {
  padding: 0.5em;
  padding: 0.75vh;
  margin: 0;
  margin-top: 8px;
  margin-top: 0.75vh;
  box-shadow: 0px 0px 12px 1px rgba(60,60,60,0.3);
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
  background-color: rgb(230, 144, 88);
}

.primary .name {
  text-align: center;
  margin: 0;
  white-space: nowrap;
  text-shadow: 4px 4px 12px rgba(0,0,0,0.2);
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.primary .description {
  position: relative;
  text-align: center;
  margin: 0 auto;
  word-wrap: break-word;
  text-shadow: 0px 0px 4px rgba(0,0,0,0.2);
}

.price {
  font-size: 4em;
  font-size: 3.3vw;
  text-align: center;
  margin: 0;
  position: relative;
  text-shadow: 0px 0px 8px rgba(0,0,0,0.2);
}

.type::before {
  background-color: black;
  content:'';
  display: block;
  height: 1px;
  max-width: 292px;
  width: 88%;
  margin: 4px auto;
  position: relative;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
}

.secondary .type.vegetarian::before {
  background-color: rgb(25, 206, 25);
}

.secondary .type.renewable::before {
  background-color: rgb(27, 136, 209);
}

.secondary .type.wellfit::before {
  background-color: rgb(230, 144, 88);
}

.secondary .name {
  font-size: 2.625em;
  font-size: 2.1875vw;
  text-align: center;
  margin: 0;
  position: relative;
  /* margin-left: 2%; */
  /* margin-right: 2%; */
  text-shadow: 0px 0px 2px rgba(0,0,0,0.1);
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
  text-shadow: 0px 0px 2px rgba(0,0,0,0.2);
}

.tagContainer {
  display: flex;
  justify-content: center;
  
}

.tag {
  width: 14%;
  padding-left: 2%;
  padding-right: 2%;
  display: inline-block;
  
}

.tag img {
  width: 100%;
  display: block;
}

.tagName {
  text-align: center;
  margin: 0;
  font-size: 1.2vw;
  font-weight: bold;
}

@media screen and (max-aspect-ratio: 11/8) {
  .primary .tileBody {
    position: relative;
    max-width: 90%;
  }

  .primary .tag {
    width: 6%;
  }

  .left .tag, .right .tag {
    width: 10%;
  }

  .left {
    width: 50%;
    margin-top: 0;
  }

  .right {
    width: 50%;
    margin-top: 0;
  }
}
</style>