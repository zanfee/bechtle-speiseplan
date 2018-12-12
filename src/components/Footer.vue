<template>
<div class="footer">
  <Progressbar />

</div>
</template>

<script>
import Progressbar from "./Progressbar";

export default {
  components: {
    Progressbar
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 96px;
  height: 6em;
  height: 10vh;
  background-color: #F5F5F5;
  bottom: 0;
  position: fixed;
}
</style>