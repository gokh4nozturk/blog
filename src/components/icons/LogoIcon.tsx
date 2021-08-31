import * as React from "react";

function SvgLogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      {...props}
    >
      <circle
        fill="#fff"
        stroke="#000"
        strokeWidth=".25em"
        cx={25}
        cy={25}
        r={20}
      />
    </svg>
  );
}

export default SvgLogoIcon;
