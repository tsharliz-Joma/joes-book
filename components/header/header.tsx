import * as React from "react";
import {cn} from "@/lib/utils";
import {HeaderProps, HeaderSizeProps} from "@/types/components";

const sizeClasses = {
  sm: {
    title: "text-xl sm:text-2xl font-semibold",
    desc: "text-sm",
    gap: "gap-2",
    padY: "py-3",
  },
  md: {
    title: "text-2xl sm:text-3xl font-semibold",
    desc: "text-base",
    gap: "gap-3",
    padY: "py-6",
  },
  lg: {
    title: "text-3xl sm:text-4xl font-semibold",
    desc: "text-lg",
    gap: "gap-4",
    padY: "py-8",
  },
};

const Header = <T extends React.ElementType = "header">({
  title,
  description,
  eyebrow,
  metaPills,
  actions,
  breadcrumbs,
  size = "md",
  align = "left",
  withBorder = false,
  as,
  heading = "h1",
  className,
  ...props
}: HeaderProps<T>) => {
  const Comp = (as ?? "header") as React.ElementType;
  const TitleTag = heading;
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const sz = sizeClasses[size];
  const container = cn("w-full", sz.padY, withBorder && "border-b", className);
  return (
    <Comp className={container}>
      <div
        className={cn(
          `mx-auto w-full max-w-6xl px-4 flex flex-col`,
          alignCls,
          sz.gap,
        )}></div>
      {/* Breadcrumbs are optional */}
      {breadcrumbs?.length ? (
        <nav aria-label="Breadcrumb" className="w-full">
          <ol
            className={cn(
              "flex flex-wrap gap-1 text-xs text-muted-foreground",
              align === "center" && "justify-center",
            )}>
            {breadcrumbs.map((bc, i) => (
              <li key={`${bc.label}-${i}`} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden>/</span>}
                {bc.href ? (
                  <a href={bc.href} className="hover:underline">
                    {bc.label}
                  </a>
                ) : (
                  <span aria-current="page">{bc.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {/* Eyebrow + Actions row (optional) */}
      {(eyebrow || actions) && (
        <div
          className={cn(
            "flex w-full items-center gap-4",
            align === "center" ? "justify-center" : "justify-between",
          )}>
          {eyebrow ? (
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </div>
          ) : (
            <div />
          )}
          {actions ? (
            <div className="flex items-center gap-2">{actions}</div>
          ) : null}
        </div>
      )}
      {title ? <TitleTag className={sz.title}>{title}</TitleTag> : null}
      {description ? (
        <p className={cn(sz.desc, `text-muted-foreground max-w-3xl`)}>
          {description}
        </p>
      ) : null}

      {/* Meta pills (optional) */}
      {metaPills?.length ? (
        <div
          className={cn(
            "flex flex-wrap gap-2 text-xs",
            align === "center" && "justify-center",
          )}>
          {metaPills.map((pill, i) => (
            <span key={i} className="rounded-full border px-2 py-0.5">
              {pill}
            </span>
          ))}
        </div>
      ) : null}
    </Comp>
  );
};

export default Header;
