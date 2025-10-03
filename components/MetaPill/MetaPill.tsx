import * as React from "react";
import {MetaPillPropsWithRender} from "@/types/components";

const MetaPill = ({
  label,
  children,
  icon: Icon,
  className,
  iconClassName,
  renderIcon,
  ...props
}: MetaPillPropsWithRender) => {
  const iconNode = Icon ? (
    <Icon className={`size-3.5 ${iconClassName}`} aria-hidden="true" />
  ) : (
    renderIcon?.({className: `size-3.5 ${iconClassName}`})
  );
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs
                  bg-muted/40 text-muted-foreground ${className}`}
      {...props}>
      {iconNode}
      {children}
    </span>
  );
};

export default MetaPill;
