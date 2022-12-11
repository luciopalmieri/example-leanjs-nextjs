import React from "react";
import { useGetter } from "@test-leanjs/runtime-react";

export function App() {
  const locale = useGetter("locale");

  return (
   <h2>
      {locale === "en" ? `🇬🇧 Hello micro-app` : `🇪🇸 Hola  micro-app`}{" "}
      micro-app
    </h2>
  );
}
