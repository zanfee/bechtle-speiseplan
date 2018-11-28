<template>
<div class="page">
  <div class="center">
    <h1 class="priceBig">5,20€</h1>
    <div class="typeBig">
      <h2 class="titleBig">Zucchinischnitzel in Pankokruste</h2>
    </div>
    <div class="menuBodyBig">
      <h3 class="prepositionBig">dazu</h3>
      <h4 class="descriptionBig">handgemachter Kartoffel-Vogerlsalat und Lemonen Mayonnaise</h4>
    </div>
  </div>

  <div class="left">
    <h1 class="price" @click="slideForeward">5,60€</h1>
    <div class="type">
      <h2 class="title">Hausgemachte Nudel</h2>
    </div>
    <div>
      <h3 class="preposition">dazu</h3>
      <h4 class="description">Zitronenbutter, Rauke, Parmesanflakes und Grillhühnchen</h4>
    </div>
  </div>

  <div class="right">
    <h1 class="price">6,20€</h1>
    <div class="type"></div>
    <h2 class="title">Swiss Burger</h2>
    <div>
      <h3 class="preposition">mit</h3>
      <h4 class="description">Hacksteak vom Hohenloher Rind, Apfel, Bergkäse, Röstzwiebel, Gurkenrelish, Rucola und Kartoffelrösti</h4>
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
}

.right {
  align-content: center;
  width: 30%;
  margin: 0;
  overflow: hidden;
  word-wrap: break-word;
  float: right;
  margin-top: 32px;
}

.exit {
  align-content: center;
  width: 30%;
  word-wrap: break-word;
  float: left;
  margin-top: 32px;
  animation-name: exitAnimation;
  animation-duration: 2s;
}

@keyframes exitAnimation {
  from {
    background-color: yellowgreen;
    right: 70%;
  }
  to {
    background-color: transparent;
    right: 80%;
  }
}

.priceBig {
  text-align: center;
  margin: 0;
  text-shadow: 4px 4px 24px rgba(0, 0, 0, 0.5);
}

.typeBig {
  background-color:#aed581;
  padding: 8px;
  margin: 0;
  margin-top: 8px;
  box-shadow: 0px 0px 8px 1px rgba(60,60,60,0.5);
}

.titleBig {
  text-align: center;
  margin: 0;
  margin-top: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 4px 4px 12px rgba(0,0,0,0.4);
}

.menuBodyBig {
  position: absolute;
  max-width: 36%;
  left: 32%;
}

.prepositionBig {
  text-align: center;
  margin: 0;
  margin-top: 37px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}

.descriptionBig {
  text-align: center;
  margin: 0 auto;
  word-wrap: break-word;
  left: 32%;
  text-shadow: 0px 0px 4px rgba(0,0,0,0.4);
}

.price {
  font-size: 64px;
  text-align: center;
  margin: 0;
  position: relative;
  text-shadow: 0px 0px 8px rgba(0,0,0,0.2);
}

.type::before {
  content:'';
  display: block;
  background-color: #1f7de7;
  height: 1px;
  max-width: 292px;
  width: 88%;
  margin: 4px auto;
  position: relative;
}

.title {
  font-size: 42px;
  text-align: center;
  margin: 0;
  position: relative;
  max-width: 96%;
  text-shadow: 0px 0px 8px rgba(0,0,0,0.3);
}

.preposition {
  display: none;
}

.description {
  font-size: 36px;
  text-align: center;
  margin: 16px auto;
  width: 96%;
  position: relative;
  text-shadow: 0px 0px 4px rgba(0,0,0,0.4);
}
</style>
