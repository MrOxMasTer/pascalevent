declare module "*.svg?url" {
  import { FC, SVGProps } from "react";

  interface SVGRProps {
    title?: string;
    titleId?: string;
  }

  const content: FC<SVGProps<SVGElement> & SVGRProps>;
  export default content;
}
