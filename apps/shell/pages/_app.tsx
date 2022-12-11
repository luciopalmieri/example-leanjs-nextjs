import { HostProvider, createRuntime } from "@test-leanjs/runtime-react";

const runtime = createRuntime({ context: { appName: "NextShell" }});

export default function MyApp({ Component, pageProps }) {
  return (
    <HostProvider origin="http://localhost:33000" runtime={runtime}>
      <Component {...pageProps} />
    </HostProvider>
  );
}
