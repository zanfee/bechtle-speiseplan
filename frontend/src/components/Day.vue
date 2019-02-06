<template>
  <div class="day">
    <p class="unselectable">{{ day }}</p>
  </div>
</template>

<script>
export default {
  props: {
    day: Number
  }
};
</script>

<style scoped>
.day {
  height: 20%;
  width: 14.286%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

p, .fit p {
  font-size: calc(0.5em + 2.5vw);
  margin: 0;
}
</style>
