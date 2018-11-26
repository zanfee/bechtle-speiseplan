<template>
<div class="page">
  <div class="center">
    <h1 class="priceBig">5,20€</h1>
    <div class="typeBig">
      <h2 class="titleBig">Zucchinischnitzel in Pankokruste</h2>
    </div>
    <div></div>
    <h3 class="prepositionBig">dazu</h3>
    <h4 class="descriptionBig">handgemachter Kartoffel-Vogerlsalat und Lemonen Mayonnaise</h4>
  </div>

  <div class="left">
    <h1 class="price">5,60€</h1>
    <div class="type">
      <h2 class="title">Hausgemachte Nudel</h2>
    </div>
    
    <h3 class="preposition">dazu</h3>
    <h4 class="description">Zitronenbutter, Rauke, Parmesanflakes und Grillhühnchen</h4>
  </div>

  <div class="right">
    <h1 class="price">6,20€</h1>
    <div class="type"></div>
    <h2 class="title">Swiss Burger</h2>
    <h3 class="preposition">mit</h3>
    <h4 class="description">Hacksteak vom Hohenloher Rind, Apfel, Bergkäse, Röstzwiebel, Gurkenrelish, Rucola und Kartoffelrösti</h4>
  </div>
</div>
</template>

<script>
export default {
  events: {
    slideForeward: function() {
      alert('HI');//this.slideForeward();
    }
  },
  methods: {
     slideForeward() {
      var isLeft = document.getElementsByClassName('left');
      alert(isLeft.length);
      isLeft[0].classList.remove('left');
      isLeft[0].classList.add('exit');

    }
  }
};
</script>

<style scoped>
.left {
  align-content: center;
  right: 70%;
  width: 30%;
  top: 0;
  word-wrap: break-word;
}

.center {
  
}

.right {
  align-content: center;
  left: 70%;
  top: 504px;
  position: absolute;
  width: 30%;
  overflow: hidden;
  word-wrap: break-word;
}

.exit {
  animation-name: exitAnimation;
}

@keyframes exitAnimation {
  from {
    background-color: yellow;
  }
  to {
    background-color: green;
  }
}

.priceBig {
  text-align: center;
  margin: 0;
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
}

.prepositionBig {
  text-align: center;
  margin: 0;
  margin-top: 37px;
}

.descriptionBig {
  max-width: 36%;
  text-align: center;
  margin: 0 auto;
  word-wrap: break-word;
}

.price {
  font-size: 64px;
  text-align: center;
  margin: 0;
}

.type::before {
  content:'';
  display: block;
  background-color: #1f7de7;
  height: 1px;
}

.type {
  width: 292px;
  margin: 4px auto;
}

.title {
  font-size: 42px;
  text-align: center;
  margin: 0;
}

.preposition {
  display: none;
}

.description {
  font-size: 36px;
  text-align: center;
  margin: 16px auto;
}
</style>
