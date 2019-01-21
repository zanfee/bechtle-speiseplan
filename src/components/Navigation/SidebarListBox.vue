<template>
  <a class="item">
    <input type="checkbox" :id="id" @click="cmd"/>
    <label :for="id">
      <slot></slot>
    </label>
  </a>
</template>

<script>
export default {
  data () {
    return {
      id: null
    }
  }, 
  props: ['command'],
  methods: {
    cmd() {
      this.$store.commit(this.command)
    }
  },
  mounted() {
    this.id = this._uid
    var checkbox = this.$el.children[0];
    if (this.command === "toggleShortcuts") {
      checkbox.checked = this.$store.state.shortcuts;
    } else if (this.command === "toggleFit") {
      checkbox.checked = this.$store.state.fit;
    }
  }
};
</script>

<style scoped>
.item {
  visibility: visible;
  position: relative;
  font-weight: 400;
  display: block;
  margin-top: 0;
  margin-bottom: 0.625em;
  margin-left: 1em;
}

[type="checkbox"] {
  position: absolute;
  left: -9999px;
  visibility: hidden;
}

[type="checkbox"]+label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border: 2px solid rgb(127,127,127);
  border-radius: 1px;
  margin-top: 2px;
  transition: 0.2s;
}
[type="checkbox"]:not(:checked):disabled+label:before {
  border:none;
  background-color:rgba(0,0,0,0.5)
}

[type="checkbox"]:checked+label:before {
  top: -6px;
  left: -6px;
  width: 10px;
  height: 22px;
  vertical-align: middle;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #2e7d32;
  border-bottom: 2px solid #2e7d32;
  transform: rotate(40deg);
  backface-visibility: hidden;
  transform-origin: 100% 100%
}

[type="checkbox"]:checked:disabled+label:before {
  border-right: 2px solid rgba(0,0,0,0.25);
  border-bottom: 2px solid rgba(0,0,0,0.25)
}

[type="checkbox"]+label {
    position: relative;
    padding-left: 36px;
    cursor: pointer;
    display: inline-block;
    height: 25px;
    line-height: 25px;
} 
</style>
