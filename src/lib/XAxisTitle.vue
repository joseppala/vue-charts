<template>
  <div class="x-axis-title"
    :style="getStyles()">
    {{text}}
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    textColor: String,
    position: String,
    offset: Number
  },
  methods: {
    getStyles() {
      let position;
      if (this.position === 'top') {
        position = `top: -${this.offset}px;`;
      } else {
        position = `bottom: -${this.offset}px;`;
      }
      return `
        ${position}
        left: ${this.left};
        width: ${this.height}px;
        color: ${this.textColor};
      `;
    }
  }
}
</script>

<style scoped>
  .x-axis-title {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
  }
</style>