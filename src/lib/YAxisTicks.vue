<template>
  <div class="y-axis-ticks">
    <div
      class="y-tick"
      v-for="(tick, i) in ticks" :key="i"
      :style="getTickLineStyle(tick.value)">
      <div
        v-if="tick.text"
        class="y-tick-text-container"
        :style="getTickTextContainerStyle()">
        <div
          class="y-tick-text"
          :style="getTickTextStyle()">
          {{tick.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    ticks: Array,
    mapY: Function,
    textPosition: String,
    textColor: String,
    lineWidth: Number,
    lineColor: String,
    lineLeft: String,
    lineRight: String
  },
  methods: {
    getTickLineStyle(tick) {
      return `
        top: ${this.mapY(tick) - this.lineWidth / 2}px;
        left: ${this.lineLeft};
        right: ${this.lineRight};
        background-color: ${this.lineColor};
        height: ${this.lineWidth}px;
      `;
    },
    getTickTextContainerStyle() {
      const color = `color: ${this.textColor};`
      if (this.textPosition === 'right') {
        return `${color} right: 0;`
      } else {
        return `${color} left: 0;`
      }
    },
    getTickTextStyle() {
      if (this.textPosition === 'right') {
        return `
          left: 0;
          margin-left: 8px;
        `;
      } else {
        return `
          right: 0;
          margin-right: 8px;
        `;
      }
    }
  }
}
</script>

<style scoped>
  .y-axis-ticks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .y-tick {
    position: absolute;
  }
  .y-tick-text-container {
    position: absolute;
    width: 0;
    height: 0;
  }
  .y-tick-text {
    position: absolute;
    height: 30px;
    line-height: 30px;
    bottom: -15px;
  }
</style>