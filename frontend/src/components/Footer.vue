<template>
  <div class="footer">
    <Progressbar/>
  </div>
</template>

<script>
import Progressbar from "./Progressbar";

export default {
  components: {
    Progressbar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 96px;
  height: 10vh;
  background-color: #f5f5f5;
  bottom: 0;
  position: fixed;
}
</style>