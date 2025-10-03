import * as React from "react";
import Link from "next/link";
import {allGuides} from "contentlayer/generated";
import Header from "@/components/header/header";
import GuideCard from "@/components/ContentCard/ContentCard";

const GuidePage = ({...props}) => {
  const guides = allGuides.sort((a, b) => a.title.localeCompare(b.title));
  console.log(guides);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Header
        title="Brew Guides"
        description="Clear, step-by-step guides for popular brew methods."
      />
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide._id}>
            <GuideCard
              slug={`/guides/${guide.slugAsParams}`}
              title={guide.title}
              ratio={guide.ratio}
              minutes={guide.minutes}
              difficulty={guide.difficulty}
              tags={guide.tags?.slice(0, 3) ?? []}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default GuidePage;
