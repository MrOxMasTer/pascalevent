import { cn } from "../lib/utils/cn";
import { ButtonProps } from "../types/Button";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn("btn", className)} {...props}>
      <div>{children}</div>
    </button>
  );
};
