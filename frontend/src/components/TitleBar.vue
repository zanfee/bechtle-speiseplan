<template>
  <div class="title-bar">
    <TitleBarButton iconCode="arrow_left"></TitleBarButton>
    <div class="title-textbox">
      <h1>Februar 2019</h1>
    </div>
    <TitleBarButton iconCode="arrow_right"></TitleBarButton>
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
}

div {
  vertical-align: middle;
}

h1 {
  font-size: 2vw;
  margin: 0;
  text-align: center;
}

.fit h1 {
  font-size: 2vw;
  margin: 0;
  text-align: center;
}

.title-textbox {
  flex-grow: 1;
}

.title-bar-button {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
