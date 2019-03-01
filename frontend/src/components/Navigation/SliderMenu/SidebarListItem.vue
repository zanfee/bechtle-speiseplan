<template>
  <li :class="{ 'indent': !large }">
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    large: Boolean
  }
};
</script>

<style scoped>
.indent {
  left: 16px;
  position: relative;
  font-weight: 400;
}

.light li {
  color: #505050;
}

.dark li {
  color: #dddddd;
}

.light .nav-admin li {
  color: rgb(160, 10, 10);
}

.dark .nav-admin li {
  color: rgb(247, 82, 82);
}
</style>
