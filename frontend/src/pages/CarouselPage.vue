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

function DateToUrlFriendlyString(date) {
  return (
    date.getDate() +
    "_" +
    date.getMonth() +
    1 +
    "_" +
    date.getFullYear().toString()
  );
}

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
    setErrorData(code) {
      this.items = [
        {
          name: code,
          description: "Data not available",
          price: "ERROR",
          tags: []
        },
        {
          name: code,
          description: "Data not available",
          price: "ERROR",
          tags: []
        },
        {
          name: code,
          description: "Data not available",
          price: "ERROR",
          tags: []
        },
        {
          name: code,
          description: "Data not available",
          price: "ERROR",
          tags: []
        }
      ];
    },
    fetchData() {
      fetch(
        "https://us-central1-bechtle-speiseplan.cloudfunctions.net/read?date=" +
          DateToUrlFriendlyString(new Date())
      )
        .then(response => {
          response.json().then(json => {
            /* eslint-disable */
            console.log(json);
            if (!response.ok || !json) {
              this.setErrorData("404");
            } else {
              this.items = json;
            }
          });
        })
        .catch(() => {
          this.setErrorData("500");
        });
    }
  }
};
</script>