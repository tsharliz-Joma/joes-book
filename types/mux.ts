export type LatestShortVideosProps = {
  mux: MuxAssetResponseType;
  className: string;
};

export type MuxAssetResponseType = {
  data: MetadataType[];
};

export type MuxAssetType = {
  id: string;
  created_at: string | number;
  duration: number;
  aspect_ratio: `${number}:${number}` | string;
  metadata: MetadataType;
  playback_ids: PlayBackIdsType[];
  ingest_type: string;
};

export type MetadataType = {
  video_id: string;
  video_title: string;
  viewer_user_id: string;
  playback_ids: PlayBackIdsType[];
  aspect_ratio: string;
};

export type PlayBackIdsType = {
  policy: string;
  id: string;
};

export type PublicPlaybackIdType = {
  playback_ids?: PlayBackIdsType[];
};

export type PlaybackIdsType = {
  id: string;
  policy: "public" | "signed" | (string & {});
};
