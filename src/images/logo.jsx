import React from "react"

export default function Logo({ width = 62, height = 30 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M105.994 -4.76837e-06L96.6833 33.8021L96.6957 33.805L86.7227 70H71.6227L53.1227 -4.76837e-06H66.8227L79.4227 55.7L94.2227 -4.76837e-06H105.994ZM111.617 12.7402L105.518 34.8824L114.923 70H130.123L149.123 -4.76837e-06H135.323L122.723 55.7L111.617 12.7402ZM6.09999 65.5C10.2333 69.3 15.7 71.2 22.5 71.2C29.0333 71.2 34.2 69.3667 38 65.7C41.8667 61.9667 43.8 56.6667 43.8 49.8V-4.76837e-06H31V49.8C31 52.8 30.3 55.2333 28.9 57.1C27.5 58.9 25.2667 59.8 22.2 59.8C18.9333 59.8 16.5667 58.8333 15.1 56.9C13.6333 54.9667 12.8667 52.3667 12.8 49.1H-6.07967e-06C-6.07967e-06 56.1667 2.03332 61.6333 6.09999 65.5Z"
        fill="white"
      />
    </svg>
  )
}
