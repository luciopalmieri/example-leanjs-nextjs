import { Host } from "@leanjs/next";
import React, { Suspense } from "react";
import Head from "next/head";
import { useGetter, useSetter } from "@test-leanjs/runtime-react";
import { ErrorBoundary } from "@leanjs/react/18";

const Home = () => {
  const locale = useGetter("locale");
  const setLocale = useSetter("locale");

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>{locale === "en" ? `🇬🇧 Hello Nextjs` : `🇪🇸 Hola Nextjs`}</h1>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <hr />
       <ErrorBoundary>
        <Suspense fallback={<>Loading...</>}>
          <Host app={{ packageName: "@test-leanjs/micro-app" }} />
        </Suspense>
       </ErrorBoundary>
    </>
  );
};

export default Home;
