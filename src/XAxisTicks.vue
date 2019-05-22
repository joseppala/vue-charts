<template>
  <div class="x-axis-ticks">
    <div
      class="x-tick"
      v-for="(tick, i) in ticks" :key="i"
      :style="getTickLineStyle(tick.value)">
      <div
        v-if="tick.text"
        class="x-tick-text-container"
        :style="getTickTextContainerStyle()">
        <div
          class="x-tick-text"
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
    mapX: Function,
    textPosition: String,
    textColor: String,
    lineWidth: Number,
    lineColor: String,
    lineTop: String,
    lineBottom: String
  },
  methods: {
    getTickLineStyle(tick) {
      return `
        left: ${this.mapX(tick) - this.lineWidth / 2}px;
        top: ${this.lineTop};
        bottom: ${this.lineBottom};
        background-color: ${this.lineColor};
        width: ${this.lineWidth}px;
      `;
    },
    getTickTextContainerStyle() {
      const color = `color: ${this.textColor};`
      if (this.textPosition === 'top') {
        return `${color} top: 0;`
      } else {
        return `${color} bottom: 0;`
      }
    },
    getTickTextStyle() {
      const marginLeft = -250 + this.lineWidth / 2;
      if (this.textPosition === 'top') {
        return `
          margin-left: ${marginLeft}px;
          bottom: 0;
          margin-bottom: 8px;
        `;
      } else {
        return `
          margin-left: ${marginLeft}px;
          top: 0;
          margin-top: 8px;
        `;
      }
    }
  }
}
</script>

<style scoped>
  .x-axis-ticks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .x-tick {
    position: absolute;
  }
  .x-tick-text-container {
    position: absolute;
    width: 0;
    height: 0;
  }
  .x-tick-text {
    position: absolute;
    text-align: center;
    width: 500px;
  }
</style>