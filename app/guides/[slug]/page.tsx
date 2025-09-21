import * as React from "react";
import {allGuides} from "contentlayer/generated";

export const generateStaticParams = async () =>
  allGuides.map((guide) => ({slug: guide._raw.flattenedPath}));

export const generateMetadata = ({
  params,
}: {
  params: Promise<{slug: string}>;
}) => {
  return params.then(({slug}) => {
    const guide = allGuides.find((guide) => guide._raw.flattenedPath === slug);
    if (!guide) throw new Error("Guide not found");
    return {title: guide.title};
  });
};

const FeaturedGuideLayout = ({params}: {params: {slug: string}}) => {
  return <div>Featured Guide Layout</div>;
};

export default FeaturedGuideLayout;
