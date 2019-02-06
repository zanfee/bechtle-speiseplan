<template>
  <div class="page">
    <div class="tool">
      <Calendar></Calendar>
      <Formular></Formular>
    </div>
  </div>
</template>

<script>
import Calendar from "../components/Calendar";
import Formular from "../components/Formular";

export default {
  components: {
    Calendar,
    Formular
  }
}
</script>

<style>
.tool-container {
  display: inline-block;

  width: 42vw;
  height: 42vw;
  max-height: 80%;
    
  overflow: auto;
  margin: auto;

  border-radius: 16px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
  overflow: hidden;
}

.tool-body {
  width: 100%;
  height: 88%;
  border-radius: 16px;
}
</style>

<style scoped>
.tool {
  display: flex;
  position: relative;
  width: 90%;
  margin: auto;
  height: calc(89.25vh - 60px);
}
</style>

