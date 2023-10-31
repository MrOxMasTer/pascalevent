import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPin = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        fill="#78C081"
        stroke="#577A5B"
        d="M10 .5a7.01 7.01 0 0 1 7 7c0 1.244-.406 2.599-1.048 3.957-.641 1.354-1.504 2.682-2.384 3.863A37.573 37.573 0 0 1 10 19.425a37.576 37.576 0 0 1-3.568-4.105c-.88-1.181-1.743-2.509-2.384-3.863C3.405 10.1 3 8.744 3 7.5a7.01 7.01 0 0 1 7-7Zm0 10.938A3.94 3.94 0 0 0 13.938 7.5 3.937 3.937 0 1 0 10 11.438Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPin;
