/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./CircularProgress.module.css";
export default function CircularProgress({
  percentage,
  circleWidth,
  strokeColor,
}) {
  const radius = 45;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth="8px"
          className="fill-none stroke-gray-300"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth="8px"
          className="fill-none stroke-blue-400"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-180 ${circleWidth / 2} ${circleWidth / 2})`}
        />
      </svg>
    </div>
  );
}
