import React from 'react'

const Polygon2 = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={{
        enableBackground: "new 0 0 200 200",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1={7.677}
        y1={52.942}
        x2={156.677}
        y2={204.942}
      >
        <stop
          offset={0}
          style={{
            stopColor: "#ea517d",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#d37d2c",
          }}
        />
      </linearGradient>
      <path
        d="m90.9 28.1-82.6 143c-3.8 6.7 1 15 8.7 15h165.2c7.7 0 12.5-8.3 8.7-15l-82.6-143c-3.9-6.7-13.5-6.7-17.4 0z"
        style={{
          fill: "url(#b)",
        }}
      />
    </svg>
  )
  
  export default Polygon2