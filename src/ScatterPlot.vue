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
    pointRadius: Number,
    pointColor: String
  },
  computed: {
    pointPositions() {
      return this.points.map((point) => [this.mapX(point[0]), this.mapY(point[1])]);
    },
    pointStyle() {
      return `
        width: ${this.pointRadius * 2}px;
        height: ${this.pointRadius * 2}px;
        background-color: ${this.pointColor};
      `;
    }
  },
  methods: {
    getPointCircleStyle(point) {
      return `
        ${this.pointStyle}
        left: ${point[0] - this.pointRadius}px;
        top: ${point[1] - this.pointRadius}px;
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