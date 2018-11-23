<template>
<div>
  <h1 class="priceBig">4,50€</h1>
  <div class="typeBig">
    <h2 class="titleBig">Frische Rigatoni Funghi</h2>
  </div>
  <h3 class="dazuBig">dazu</h3>
  <h4 class="descriptionBig">Grana Padano Schaum, Kirschtomate, Champignon, frittierter Winterlauch, laktosefrei!</h4>
  
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.priceBig {
  text-align: center;
  margin: 0;
}

.typeBig {
  background-color:#aed581;
  width: 100%;
  height: 172px;
  margin: 0;
  margin-top: 8px;
  box-shadow: 0px 0px 8px 1px rgba(60,60,60,0.5);
}

.titleBig {
  text-align: center;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
}

.dazuBig {
  text-align: center;
  margin: 0;
  margin-top: 32px;
}

.descriptionBig {
  max-width: 656px;
  text-align: center;
  margin: 0 auto;
}
</style>
