import {MuxAssetResponseType, PublicPlaybackIdType} from "@/types/mux";

export async function getMuxAssets(): Promise<MuxAssetResponseType> {
  const basic = Buffer.from(
    `${process.env.MUX_TOKEN_ID}:${process.env.MUX_SECRET}`,
  ).toString("base64");

  const res = await fetch(`${process.env.MUX_ENDPOINT}`, {
    next: {revalidate: 120},
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Basic ${basic}`,
    },
  });

  if (!res.ok) throw new Error(`Failed to fetch Mux assets`);
  return res.json();
}

export const getPublicPlaybackId = (asset: PublicPlaybackIdType) => {
  return (
    asset.playback_ids?.find((p: any) => p.policy !== "signed")?.id ??
    asset.playback_ids?.[0]?.id
  );
};
