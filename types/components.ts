
import type {ReactNode, ElementType, ComponentPropsWithoutRef} from "react";
import type {LucideIcon} from "lucide-react";
// Header Props
export type Size = "sm" | "md" | "lg";

export type Align = "left" | "center";

export type Breadcrumb = {
  label: string;
  href?: string;
};

export type MetaPillType = {
  label: string | number;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
  iconClassName?: string;
  "aria-label"?: string;
};

export type MetaPillRenderIcon = (props: {className?: string}) => ReactNode;

export interface MetaPillPropsWithRender extends MetaPillType {
  renderIcon?: MetaPillRenderIcon;
}

export type HeaderProps<T extends ElementType = "header"> = {
  title?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  metaPills?: Array<ReactNode | String>;
  actions?: ReactNode;
  breadcrumbs?: Breadcrumb[];
  size?: Size;
  align?: Align;
  withBorder?: boolean;
  as?: T;
  heading?: "h1" | "h2" | "h3";
} & Omit<ComponentPropsWithoutRef<T>, "title">;

export type HeaderSizeProps = {
  title: string;
  desc: string;
  gap: string;
  padY: string;
  eyebrow: string;
};

// Guide Card
export type ContentCardType = {
  slug: string;
  title: string;
  details?: string;
  method?: string;
  ratio?: string;
  minutes?: number;
  difficulty: string;
  image?: string;
  tags?: string[];
  variant?: "vertical" | "horizontal";
  indx?: number | string;
};
