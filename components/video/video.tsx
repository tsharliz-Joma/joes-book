import * as React from "react";
import {Button} from "../ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Youtube} from "lucide-react";

const latestVideos = [
  {title: "Latte Art: Heart → Tulip", length: "03:21"},
  {title: "Grinder 101: Burr vs Blade", length: "04:10"},
  {title: "Water Basics: Why Minerals Matter", length: "05:02"},
];

const Video = ({...props}) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">
          Lastest short videos
        </h2>
        <Button variant="ghost" className="text-sm">
          See more
        </Button>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latestVideos.map((video) => (
          <Card key={video.title}>
            <CardContent className="p-0">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-accent/50">
                <Youtube className="absolute left-3 top-3 size-5 opacity-80" />
                <span className="absolute bottom-2 right-2 rounded bg-background/80 px-1.5 py-0.5 text-xs">
                  {video.length}
                </span>
              </div>
            </CardContent>
            <CardHeader className="space-y-3">
              <CardTitle className="line-clamp-2 text-base font-medium">
                {video.title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Video;
