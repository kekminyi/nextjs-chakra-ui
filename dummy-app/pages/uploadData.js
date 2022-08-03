import React from "react";
import dynamic from "next/dynamic";

function uploadData() {
  const ComponentWithNoSSR = dynamic(() => import("./components/upload"), {
    ssr: false,
  });

  return <ComponentWithNoSSR></ComponentWithNoSSR>;
}

export default uploadData;
