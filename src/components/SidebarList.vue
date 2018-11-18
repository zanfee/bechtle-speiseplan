<template>
  <div>
    <a @click="isExpanded = !isExpanded">{{ title }}</a>
    <slot class="menu-point" v-if="isExpanded"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false
    };
  },
  props: {
    title: String
  }
};
</script>

<style>
.menu-point {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
