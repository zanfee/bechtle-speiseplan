<template>
  <div id="page">
    <div v-for="(item, index) in items" v-bind:key="index">
      <FoodTile
        :index="index"
        :price="item.price"
        :name="item.name"
        :description="item.description"
        :tags="item.tags"
        :tileLength="items.length"
      ></FoodTile>
    </div>
  </div>
</template>

<script>
import FoodTile from "../components/Tiles/Food/FoodTile";
const DateToUrlFriendlyString = require("../../../shared/Date.js")
  .DateToUrlFriendlyString;

export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    FoodTile
  },
  mounted() {
    this.$root.$on("slide-foreward", () => {
      this.items.unshift(this.items[this.items.length - 1]);
      this.items.pop();
      this.items.unshift(this.items[2]);
      this.items.splice(3, 1);
    });

    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(
        "http://localhost:5000/bechtle-speiseplan/us-central1/read?date=" +
          DateToUrlFriendlyString(new Date())
      ).then(response => {
        if (!response.ok || !response.json()) {
          this.items = [
            {
              name: "404",
              description: "Data not available",
              price: "ERROR",
              tags: []
            }
          ];
        } else {
          this.items = response.json();
        }
      });
    }
  }
};
</script>