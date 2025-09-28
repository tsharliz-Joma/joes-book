import * as React from "react";

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
};

const Header = ({title, description, ...props}: HeaderProps) => {
  return (
    <header>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </header>
  );
};

export default Header;
