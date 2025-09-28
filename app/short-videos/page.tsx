import Header from "@/components/header/header";
import * as React from "react";

const ShortVideosPage = ({...props}) => {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <Header title="Videos" description="Short brew tips & techniques." />
    </div>
  );
};

export default ShortVideosPage;
