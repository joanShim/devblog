import { cn } from "@/util/utils";
import { ComponentPropsWithRef } from "react";

interface LinkProps extends ComponentPropsWithRef<"a"> {}

export function Link({ className, ...props }: LinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-primary hover:underline", className)}
      {...props}
    />
  );
}
