import React from "react";

const Waves = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={props?.color || "#0099ff"}
        fillOpacity="1"
        d="M0,256L34.3,245.3C68.6,235,137,213,206,186.7C274.3,160,343,128,411,106.7C480,85,549,75,617,85.3C685.7,96,754,128,823,138.7C891.4,149,960,139,1029,149.3C1097.1,160,1166,192,1234,186.7C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      ></path>
    </svg>
  );
};

export default Waves;
