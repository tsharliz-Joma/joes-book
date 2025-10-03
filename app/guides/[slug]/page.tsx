import * as React from "react";
import {allGuides} from "contentlayer/generated";

export const generateStaticParams = async () =>
  allGuides.map((guide) => ({slug: guide.slugAsParams}));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{slug: string}>;
}) => {
  const {slug} = await params;
  const guide = allGuides.find((guide) => guide.slugAsParams === slug);
  if (!guide) return {title: "Guide not found"}; // don’t throw here
  return {title: guide.title};
};

const IndividualGuidePage = ({params}: {params: {slug: string}}) => {
  return <div>How to brew: {params.slug}</div>;
};

export default IndividualGuidePage;
