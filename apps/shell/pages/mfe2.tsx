import React, { Suspense } from "react";
import Head from "next/head";

import { Host } from "@leanjs/next";
import { ErrorBoundary } from "@leanjs/react/18";

const Mfe2 = () => {
  return (
    <>
      <Head>
        <title>Host & Chat</title>
      </Head>
      <ErrorBoundary>
        <Suspense fallback={<>Loading...</>}>
          <Host app={{ packageName: "@test-leanjs/micro-app" }} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Mfe2;
