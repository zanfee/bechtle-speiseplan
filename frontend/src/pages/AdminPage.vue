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

<style scoped>
.page {
  
}

.tool {
  display: flex;
  position: relative;
  width: 80%;
  margin: auto;
  height: calc(89.25vh - 60px);
}

.calendar {
  vertical-align: middle;
}

.formular {

}
</style>
