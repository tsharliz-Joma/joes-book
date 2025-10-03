import * as React from "react";
import {Button} from "../ui/button";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import {LatestShortVideosProps} from "@/types/mux";
import {getPublicPlaybackId} from "@/lib/mux";

const LatestShortVideos = async ({mux, ...props}: LatestShortVideosProps) => {
  const assets = mux.data;

  return (
    <section {...props}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">
          Latest short videos
        </h2>
        <Button variant="ghost" className="text-sm">
          <Link href="/short-videos">See more</Link>
        </Button>
      </div>
      <div className="my-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {assets.map((video, i) => {
          const playbackId = getPublicPlaybackId(video);
          return (
            <div key={`${video.video_title}-${i++}`} className="">
              <MuxPlayer
                key={i}
                playbackId={playbackId}
                streamType="on-demand"
                metadata={{
                  video_id: `${video.video_id}`,
                  video_title: `${video.video_title}`,
                  viewer_user_id: `${video.viewer_user_id}`,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestShortVideos;
