import React from "react";
import Link from "next/link";
import { useGetter, useLoading } from "@test-leanjs/runtime-react";

export function Nav() {

  return (
    <nav>
      <Link shallow href="/">
        Home
      </Link>{" "}
      |{" "}
      <Link shallow href="/mfe">
        MFE
      </Link>
      |{" "}
      <Link shallow href="/mfe2">
        MFE2
      </Link>
    </nav>
  );
}
