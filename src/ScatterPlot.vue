<template>
  <div>
    <div
      class="point-circle"
      v-for="(point, i) in pointPositions" :key="i"
      :style="getPointCircleStyle(point)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: Array,
    mapX: Function,
    mapY: Function,
    pointSize: Number,
    pointFillColor: String,
    pointBorderColor: String,
    pointBorderWidth: Number
  },
  computed: {
    pointPositions() {
      if (!this.points) {
        return [];
      }
      return this.points.map((point) => [this.mapX(point[0]), this.mapY(point[1])]);
    },
    pointStyle() {
      let styles = `
        width: ${this.pointSize}px;
        height: ${this.pointSize}px;
      `;
      if (this.pointFillColor) {
        styles += ` background-color: ${this.pointFillColor};`;
      }
      if (this.pointBorderColor && this.pointBorderWidth > 0) {
        styles += ` border: ${this.pointBorderWidth}px solid  ${this.pointBorderColor};`;
      }
      return styles;
    }
  },
  methods: {
    getPointCircleStyle(point) {
      return `
        ${this.pointStyle}
        left: ${point[0] - this.pointSize / 2}px;
        top: ${point[1] - this.pointSize / 2}px;
      `
    }
  }
}
</script>

<style scoped>
  .point-circle {
    position: absolute;
    border-radius: 1000px;
  }
</style>