<template>
  <section>
    <a @click="isExpanded = !isExpanded">{{ title }}</a>
    <ul v-if="isExpanded">
      <slot></slot>
    </ul>
  </section>
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
a {
  padding-inline-start: 40px;
}
</style>
