<template>
  <div id="page">
    <div v-for="(item, index) in items" v-bind:key="index">
      <FoodTile
        :index="index"
        :price="item[0]"
        :name="item[1]"
        :description="item[2]"
        :tags="item[3]"
        :tileLength="items.length"
      ></FoodTile>
    </div>
  </div>
</template>

<script>
import FoodTile from "../components/Tiles/Food/FoodTile";

export default {
  data() {
    return {
      items: [
        ["4,80€", "Quinoa Risotto", "Pilz, Tomate, geröstetem Sesam, Zucchini und Ziegenfrischkäse", []],
        ["5,20€", "Turkey Burger", "Fries, Truthahn Sous Vide, Speck, grüner Salat, handgemachte Cocktail-sauce, Röstzwiebel, Tomate, Ei", []],
        ["3,40€", "Gebratener Hoki", "Mie Nudel, Zitrone, Chilisoße und Gemüse", ["renewable"]],
        ["4,80€", "Knackiger Blattsalat", "backfrisches Ciabatta, weißer Balsamico, hauchdünn geschnittener Bresaola, gekochtes Ei und Grana Padano", ["wellfit"]],
        ["5,30€", "Ofenfrischer Schweinebraten", "Schupfnudel, Majoransoße und Grünkohl", []]
      ]
    };
  },
  components: {
    FoodTile
  }
};
</script>