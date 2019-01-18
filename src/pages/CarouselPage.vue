<template>
<div class="page">
  <div class="center">
    <h1 class="price">4,50€</h1>
    <div class="type">
      <h2 class="title">Blumenkohlgulasch</h2>
    </div>
    <div class="menuBody">
      <h3 class="preposition">dazu</h3>
      <h4 class="description">Parmesan und gedämpfter Kräuterreis, laktosefrei! Hallolfelflek ijfiejfia ejffjei jafi jfie ieieieiei eie iParmesan und gedämpfter Kräuterreis, laktosefrei!</h4> 
      <div class="tagContainer">
        <div class="tag">
          <img src="../assets/wellfit.svg" >
          <p class="tagName">Well Fit</p>
        </div>
        <div class="tag">
          <img src="../assets/wellfit.svg" >
          <p class="tagName">Well Fit</p>
        </div>
      </div>
    </div>
  </div>

  <div class="left">
    <h1 class="price" @click="slideForeward">5,40€</h1>
    <div class="type">
      <h2 class="title">Backfrische FitPizza</h2>
    </div>
    <div class="menuBody">
      <h3 class="preposition">dazu</h3>
      <h4 class="description">Tomatensugo, Salami vom Hohenloher Rind, Gemüsepaprika, Mozzarella und Tomatensalat mit Zwiebel</h4>
      <div class="tagContainer">
        <div class="tag">
          <img src="../assets/wellfit.svg" >
          <p class="tagName">Well Fit</p>
        </div>
        <div class="tag">
          <img src="../assets/wellfit.svg" >
          <p class="tagName">Well Fit</p>
        </div>
      </div>
    </div>
  </div>

  <div class="right">
    <h1 class="price">3,40€</h1>
    <div class="type"></div>
    <h2 class="title">Penne Rigate</h2>
    <div class="menuBody">
      <h3 class="preposition">dazu</h3>
      <h4 class="description">Käsesoße und Tomatentopping</h4>
      <div class="tagContainer">
        <div class="tag">
          <img src="../assets/wellfit.svg" >
          <p class="tagName">Well Fit</p>
        </div>
        <div class="tag">
          <img src="../assets/wellfit.svg" >
          <p class="tagName">Well Fit</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  methods: {
     slideForeward() {
      var isLeft = document.getElementsByClassName('left');
      for (var i = 0; i < isLeft.length; i++) {
        isLeft[i].classList.add('exit');
        isLeft[i].classList.remove('left');
      }
    }
  }
};
</script>

<style scoped>
.left {
  align-content: center;
  width: 30%;
  word-wrap: break-word;
  float: left;
  margin-top: 32px;
  margin-top: 3vh;
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

.exit {
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

@keyframes exitAnimation {
  from {
    padding-right: 0;
  }
  to {
    padding-right: 500px;
  }
}

.primary .price {
  text-align: center;
  margin: 0;
  text-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
}

.primary .type {
  background-color: #f9ad46;
  padding: 0.5em;
  padding: 0.75vh;
  margin: 0;
  margin-top: 8px;
  margin-top: 0.75vh;
  box-shadow: 0px 0px 12px 1px rgba(60,60,60,0.3);
}

.primary .title {
  text-align: center;
  margin: 0;
  white-space: nowrap;
  text-shadow: 4px 4px 12px rgba(0,0,0,0.2);
}

.primary .menuBody {
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

.left .price, .right .price, .exit .price {
  font-size: 4em;
  font-size: 3.3vw;
  text-align: center;
  margin: 0;
  position: relative;
  text-shadow: 0px 0px 8px rgba(0,0,0,0.2);
}

.left .type::before, .right .type::before, .exit .type::before {
  content:'';
  display: block;
  background-color: #1976d2;
  height: 1px;
  max-width: 292px;
  width: 88%;
  margin: 4px auto;
  position: relative;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
}

.left .title, .right .title, .exit .title {
  font-size: 2.625em;
  font-size: 2.1875vw;
  text-align: center;
  margin: 0;
  position: relative;
  max-width: 96%;
  text-shadow: 0px 0px 2px rgba(0,0,0,0.1);
}

.left .menuBody, .right .menuBody, .exit .menuBody {
  width: 100%;
}

.left .preposition, .right .preposition, .exit .preposition {
  display: none;
}

.left .description, .right .description, .exit .description {
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
  .primary .menuBody {
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
