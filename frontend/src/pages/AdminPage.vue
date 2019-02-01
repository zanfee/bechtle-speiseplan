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

  width: 40%;
  height: 75%;
  min-width: 300px;
  min-height: 400px;
    
  overflow: auto;
  margin: auto;

  background-color: #444444;

  border-radius: 16px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  overflow: hidden;
}

.tool-body {
  background-color: #4a4a4a;
  width: 100%;
  height: 90%;
  border-radius: 16px;
}
</style>

<style scoped>
.page {
  
}

.tool {
  display: flex;
  position: relative;
  width: calc(60px + 80%);
  margin: auto;
  height: calc(89.25vh - 60px);
}

.calendar {
  vertical-align: middle;
}

.formular {

}
</style>

