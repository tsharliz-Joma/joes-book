import { withNextVideo } from "next-video/process";
import type {NextConfig} from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextVideo(withContentlayer(nextConfig));