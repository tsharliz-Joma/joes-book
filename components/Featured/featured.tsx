import * as React from "react";
import Link from "next/link";
import {Button} from "../ui/button";

import {allGuides, Guide} from "contentlayer/generated";
import ContentCard from "../ContentCard/ContentCard";

const Featured = ({...props}) => {
  const featuredGuides: Guide[] = allGuides;
console.log(featuredGuides)
  return (
    <section {...props}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">
          Featured brew guides
        </h2>
        <Button variant="ghost" className="text-sm">
          <Link href="/guides">View all</Link>
        </Button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGuides.slice(0, 4).map((guide, idx) => (
          <ContentCard key={idx}  {...guide} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
