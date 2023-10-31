import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenu = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="25.000000"
    height="16.000000"
    viewBox="0 0 25 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <rect
      id="Rectangle 708"
      rx="1.000000"
      width="25.000000"
      height="2.000000"
      fill="#5CCD6A"
    />
    <rect
      id="Rectangle 711"
      y="14.000000"
      rx="1.000000"
      width="25.000000"
      height="2.000000"
      fill="#5CCD6A"
    />
    <rect
      id="Rectangle 709"
      x="9.000000"
      y="7.000000"
      rx="1.000000"
      width="16.000000"
      height="2.000000"
      fill="#5CCD6A"
    />
    <rect
      id="Rectangle 710"
      y="7.000000"
      rx="1.000000"
      width="6.000000"
      height="2.000000"
      fill="#5CCD6A"
    />
  </svg>
);
export default SvgMenu;
