import React from "react";
import Carousel from "react-multi-carousel";

type SvgProps = {
  svgData: {
    svgText: string;
    deg: string;
    degValue: number;
  }[];
};

export default function Svg({ svgData }: SvgProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mini: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite className="skill-slider">
      {svgData.map((item, i) => (
        <div key={i} className="svg-item">
          <svg
            key={i}
            width="175"
            height="175"
            viewBox="0 0 204 204"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#282188" }} />
                <stop offset="100%" style={{ stopColor: "#282188" }} />
              </linearGradient>
            </defs>

            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray={`calc(502 * ${item.degValue}) 502`}
              transform="rotate(-90 100 100)"
            />

            <text
              x="100"
              y="110"
              textAnchor="middle"
              fontSize="35"
              fill="#FFFFFF"
              fontWeight="bold"
            >
              {item.deg}
            </text>
          </svg>

          <h5 className="svgText">{item.svgText}</h5>
        </div>
      ))}
    </Carousel>
  );
}
