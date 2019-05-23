<template>
  <div>
    <div
      class="bar"
      v-for="(point, i) in pointPositions" :key="i"
      :style="getBarStyle(point)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: Array,
    mapX: Function,
    mapY: Function,
    barWidth: Number,
    barColor: String
  },
  computed: {
    pointPositions() {
      return this.points.map((point) => [this.mapX(point[0]), this.mapY(point[1])]);
    },
    barStyle() {
      return `
        width: ${this.barWidth}px;
        background-color: ${this.barColor};
        bottom: 0;
      `;
    }
  },
  methods: {
    getBarStyle(point) {
      return `
        ${this.barStyle}
        left: ${point[0] - this.barWidth / 2}px;
        top: ${point[1]}px;
      `
    }
  }
}
</script>

<style scoped>
  .bar {
    position: absolute;
  }
</style>