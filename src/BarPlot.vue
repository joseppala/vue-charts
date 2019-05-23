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
    barWidth: String,
    barColor: String
  },
  computed: {
    pointPositions() {
      return this.points.map((point) => [this.mapX(point[0]), this.mapY(point[1])]);
    },
    barStyle() {
      let width = this.barWidth;
      let marginLeft = 0;
      if (width.indexOf('%') !== -1 && this.points.length > 0) {
        const val = parseFloat(width.split('%')[0])
        if (this.points.length > 1) {
          const gap = this.mapX(this.points[1][0]) - this.mapX(this.points[0][0]);
          const w = val / 100 * gap;
          width = `${w}px`;
          marginLeft = `-${w / 2}px`;
        } else {
          const w = parseFloat(width.split('%')[0]);
          marginLeft = `-${w / 2}%`
        }
      } else {
        marginLeft = `-${parseFloat(width.split('px')[0]) / 2}px`;
      }
      return `
        width: ${width};
        margin-left: ${marginLeft};
        background-color: ${this.barColor};
        bottom: 0;
      `;
    }
  },
  methods: {
    getBarStyle(point) {
      return `
        ${this.barStyle}
        left: ${point[0]}px;
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