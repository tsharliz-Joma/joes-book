import * as React from "react";

const Footer = ({...props}) => {
  return (
    <footer {...props}>
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Joe’s Book. Brew better, learn faster.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
