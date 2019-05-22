<template>
  <div class="y-axis-title"
    :style="getStyles()">
    {{text}}
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    textColor: String,
    offset: Number,
    position: String
  },
  methods: {
    getStyles() {
      let position;
      const offset = 250 + this.offset;
      if (this.position === 'right') {
        position = `right: -${offset}px;`;
      } else {
        position = `left: -${offset}px;`;
      }
      return `
        ${position}
        color: ${this.textColor};
      `;
    }
  }
}
</script>

<style scoped>
  .y-axis-title {
    position: absolute;
    top: 50%;
    text-align: center;
    width: 500px;
    transform: rotate(-90deg);
  }
</style>