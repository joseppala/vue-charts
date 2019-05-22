<template>
  <div>
    <svg
      :viewBox="viewBox"
      preserveAspectRatio="none"
      class="svg">
      <path
        fill="none"
        vector-effect="non-scaling-stroke"
        :d="path"
        :stroke="lineColor"
        :stroke-width="lineWidth"
      />
    </svg>
  </div>
</template>

<script>
/**
 * Smooth svg path drawing based on the article:
 *   Smooth a Svg path with cubic bezier curves
 *   by François Romain
 *   https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
 */

const line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};

const controlPoint = (lineCalc) => (current, previous, next, reverse, smoothing) => {
  const p = previous || current;
  const n = next || current;
  // properties of the line between previous and next
  const l = lineCalc(p, n);
  // If is end-control-point, add PI to the angle to go backward
  const angle = l.angle + (reverse ? Math.PI : 0);
  const length = l.length * smoothing;
  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

const bezierCommand = controlPointCalc => (point, i, points, smoothing) => {
  // start control point
  const [cpsX, cpsY] = controlPointCalc(points[i-1], points[i-2], point, false, smoothing);
  // end control point
  const [cpeX, cpeY] = controlPointCalc(point, points[i-1], points[i+1], true, smoothing);
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};

const bezier = bezierCommand(controlPoint(line));

export default {
  props: {
    points: Array,
    mapX: Function,
    mapY: Function,
    viewBox: String,
    smoothing: Number,
    lineWidth: Number,
    lineColor: String,
  },
  computed: {
    path() {
      return this.points
        .map((point) => [this.mapX(point[0]), this.mapY(point[1])])
        .reduce((acc, point, i, points) => {
          if (i === 0) {
            return `M ${point[0]}, ${point[1]}`;
          } else {
            return `${acc} ${bezier(point, i, points, this.smoothing)}`;
          }
        }, '');
    },
  },
}
</script>

<style scoped>
  .svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>