import * as React from "react";
import {Badge} from "../ui/badge";

const brewMethods = [
  {name: "Espresso", slug: "espresso"},
  {name: "V60 / Pour-over", slug: "v60"},
  {name: "AeroPress", slug: "aeropress"},
  {name: "French Press", slug: "french-press"},
  {name: "Moka Pot", slug: "moka-pot"},
  {name: "Cold Brew", slug: "cold-brew"},
];

const Pill = ({...props}) => {
  return (
    <div {...props}>
      {brewMethods.map((method) => (
        <Badge key={method.slug} variant="secondary" className="cursor-pointer">
          {method.name}
        </Badge>
      ))}
    </div>
  );
};

export default Pill;
