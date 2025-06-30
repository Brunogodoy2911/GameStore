import type { ComponentProps } from "react";

import { classMerge } from "../utils/classMerge";

type Props = ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "px-6 py-3",
    icon: "px-7 py-3",
    iconSmall: "px-2 py-2",
  },
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center rounded-lg bg-purple-600 hover:bg-purple-700 cursor-pointer transition ease-linear disabled:opacity-50",
        variants.button[variant],
        isLoading && "cursor-progress",
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
