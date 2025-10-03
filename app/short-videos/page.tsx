import * as React from "react";
import Header from "@/components/header/header";
import {getMuxAssets} from "@/lib/mux";
import {MuxAssetResponseType} from "@/types/mux";
import MuxPlayer from "@mux/mux-player-react";
import { getPublicPlaybackId } from "@/lib/mux";

const ShortVideosPage = async ({...props}) => {
  const mux: MuxAssetResponseType = await getMuxAssets();
 
  return (
    <main className="mx-auto max-w-5xl p-6">
      <Header title="Videos" description="Short brew tips & techniques." />
      {mux.data.map((video, i) => {
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
    </main>
  );
};

export default ShortVideosPage;
