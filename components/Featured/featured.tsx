import * as React from "react";
import Link from "next/link";
import {Button} from "../ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Bookmark, Flame, PlayCircle} from "lucide-react";
import {allGuides, Guide} from "contentlayer/generated";

const Featured = ({...props}) => {
  const featuredGuides: Guide[] = allGuides;

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
          <Card key={idx} className="group">
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-accent/50" />
            </CardContent>
            <CardHeader className="space-y-2">
              <CardTitle className="line-clamp-2 text-base font-medium">
                <Link href={`${guide.slug}`}>{guide.title}</Link>
              </CardTitle>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <PlayCircle className="size-3.5" />
                  {guide.minutes} min
                </span>
                <span className="inline-flex items-center gap-1">
                  <Flame className="size-3.5" />
                  {guide.difficulty}
                </span>{" "}
                <span className="inline-flex items-center gap-1">
                  <Bookmark className="size-3.5" />
                  Save
                </span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Featured;
