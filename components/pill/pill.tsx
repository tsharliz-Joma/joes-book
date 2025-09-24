import * as React from "react";
import Link from "next/link";
import { allGuides, Guide } from "@/.contentlayer/generated";
import {Badge} from "../ui/badge";



const Pill = ({...props}) => {
  const guides: Guide[] = allGuides;
  return (
    <div {...props}>
      {guides.map((method) => (
        <Badge key={method.slug} variant="secondary" className="cursor-pointer">
          <Link href={`${method.slug}`}>{method.title}</Link>
        </Badge>
      ))}
    </div>
  );
};

export default Pill;
