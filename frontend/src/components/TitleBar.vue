<template>
  <div class="title-bar">
    <TitleBarButton @click.native="this.$parent.prev" iconCode="arrow_left"></TitleBarButton>
    <div class="calendar-title">
      <h1>Februar 2019</h1>
    </div>
    <TitleBarButton @click.native="this.$parent.next" iconCode="arrow_right"></TitleBarButton>
  </div>
</template>

<script>
import TitleBarButton from "./TitleBarButton"

export default {
  components: {
    TitleBarButton
  }
}
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
  height: 12%;
}

div {
  vertical-align: middle;
}

h1, .fit h1 {
  font-size: calc(0.4em + 1.5vw);
  margin: 0;
  text-align: center;
}

.calendar-title {
  flex-grow: 1;
}

.title-bar-button {
  margin-left: 1vw;
  margin-right: 1vw;
}
</style>
