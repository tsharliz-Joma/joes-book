import * as React from "React";
import {Button} from "../ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Bookmark, Flame, PlayCircle} from "lucide-react";

const featuredGuides = [
  {title: "Dial in Espresso at Home", minutes: 6, difficulty: "Intermediate"},
  {title: "V60: 4:6 Method Walkthrough", minutes: 8, difficulty: "Beginner"},
  {
    title: "AeroPress Inverted – Competition Recipe",
    minutes: 5,
    difficulty: "Pro",
  },
  {title: "French Press – Clean Cup Hack", minutes: 4, difficulty: "Beginner"},
];

const Featured = ({...props}) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">
          Featured brew guides
        </h2>
        <Button variant="ghost" className="text-sm">
          View all
        </Button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGuides.map((guide) => (
          <Card key={guide.title} className="group">
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-accent/50" />
            </CardContent>
            <CardHeader className="space-y-2">
              <CardTitle className="line-clamp-2 text-base font-medium">
                {guide.title}
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
