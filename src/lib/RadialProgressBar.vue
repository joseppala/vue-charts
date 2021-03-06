<template>
  <svg
    class="svg"
    :style="svgStyle"
    viewBox="0 0 100 100">
    <circle
      class="bar-bg"
      :style="backgroundStyle"
      fill="none"
      :r="radius" cx="50" cy="50" />
    <circle
      class="bar-fill"
      :style="fillStyle"
      :transform="fillTransform"
      fill="none"
      :r="radius" cx="50" cy="50" />
  </svg>
</template>

<script>
export default {
  props: {
    progress: Number,
    fillColor: String,
    backgroundColor: String,
    strokeWidth: Number,
    strokeLinecap: String,
    margin: Number,
    width: String,
    height: String,
    animationDuration: Number,
    initialAnimation: Boolean,
    startPosition: String
  },
  data() {
    return {
      val: 0
    };
  },
  computed: {
    svgStyle() {
      return `
        width: ${this.height};
        height: ${this.width};
      `;
    },
    radius() {
      const margin = this.margin || 0;
      return 50 - this.strokeWidth - margin;
    },
    backgroundStyle() {
      return `
        stroke: ${this.backgroundColor};
        stroke-width: ${this.strokeWidth};
      `;
    },
    fillStyle() {
      const strokeLength = Math.round(this.val * 2 * Math.PI * this.radius);
      return `
        stroke-linecap: ${this.strokeLinecap || 'butt'};
        stroke: ${this.fillColor};
        stroke-width: ${this.strokeWidth};
        stroke-dasharray: ${strokeLength} 1000;
        transition: stroke-dasharray ${this.animationDuration}s;
      `;
    },
    fillTransform() {
      if (this.startPosition === 'bottom') {
        return 'rotate(90 50 50)';
      } else {
        return 'rotate(-90 50 50)';
      }
    }
  },
  watch: {
    progress: {
      handler(val) {
        this.val = val;
      }
    }
  },
  created() {
    if (!this.initialAnimation || this.animationDuration <= 0) {
      this.val = this.progress;
    }
  },
  mounted() {
    if (this.initialAnimation && this.animationDuration > 0) {
      this.$nextTick(() => {
        this.val = this.progress;
      });
    }
  }
}
</script>

<style scoped>
.svg {
  position: absolute;
  top: 0;
  left: 0;
}
.bar-fill {
  animation-timing-function: ease-out;
  stroke-dasharray: 0 1000;
}
</style>