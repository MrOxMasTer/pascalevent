import Link from "next/link";
import SvgLogo from "../assets/svg/SvgLogo";
import type { LinkProps } from "../types/Link";

export const Logo = (props: LinkProps) => {
  return (
    <Link {...props}>
      <SvgLogo role="img" title="Логотип компании Pascal Vent" />
    </Link>
  );
};
