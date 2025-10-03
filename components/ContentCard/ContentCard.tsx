import * as React from "react";
import Link from "next/link";
import {ContentCardType} from "@/types/components";
import MetaPill from "../MetaPill/MetaPill";
import {Card, CardTitle, CardContent, CardHeader} from "../ui/card";
import {Bookmark, Flame, Clock, ChartPie, Footprints} from "lucide-react";

const ContentCard = ({
  slug,
  title,
  details,
  method,
  ratio,
  minutes,
  difficulty,
  image,
  tags,
  ...props
}: ContentCardType) => {
  return (
    <Card className="group block overflow-hidden rounded-2xl border bg-card hover:shadow-md focus:outline-none focus:ring-2">
      <CardContent className="aspect-video bg-muted">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="h-full w-full object-cover" />
        ) : null}
      </CardContent>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 text-lg font-medium leading-snug">
          <Link href={slug}>{title}</Link>
        </CardTitle>
        {details ? (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {details}
          </p>
        ) : null}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {method ? (
            <MetaPill label={method} className="size-3.5">
              <Footprints />
            </MetaPill>
          ) : null}
          {ratio ? (
            <MetaPill label={`Ratio ${ratio}`}>
              <ChartPie className="size-3.5" />
            </MetaPill>
          ) : null}
          {minutes ? (
            <MetaPill label={minutes}>
              <Clock className="size-3.5" />
              {minutes}
            </MetaPill>
          ) : null}
          {difficulty ? (
            <MetaPill label={difficulty}>
              <Flame className="size-3.5" />
              {difficulty}{" "}
            </MetaPill>
          ) : null}
        </div>

        {tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-xs">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </CardHeader>
    </Card>
  );
};

export default ContentCard;
