import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTroetogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="10"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx="5"
      cy="5"
      r="4"
      stroke="url(#paint0_linear_92_400)"
      strokeWidth="2"
    />
    <circle
      cx="25"
      cy="5"
      r="4"
      stroke="url(#paint1_linear_92_400)"
      strokeWidth="2"
    />
    <circle
      cx="45"
      cy="5"
      r="4"
      stroke="url(#paint2_linear_92_400)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_92_400"
        x1="10"
        y1="5"
        x2="-0.416667"
        y2="5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#78C081" stop-opacity="0.45" />
        <stop offset="1" stop-color="#78C081" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_92_400"
        x1="30"
        y1="5"
        x2="19.5833"
        y2="5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#78C081" stop-opacity="0.75" />
        <stop offset="1" stop-color="#78C081" stop-opacity="0.45" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_92_400"
        x1="50"
        y1="5"
        x2="39.5833"
        y2="5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#78C081" />
        <stop offset="1" stop-color="#78C081" stop-opacity="0.75" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTroetogo;
