'use client';

import React, { useEffect, useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit: undefined | typeof import("pspdfkit").default;

    (async function () {
      if (container) {
        PSPDFKit = (await import("pspdfkit")).default;
        await PSPDFKit.load({
          container,
          document: "/document.docx",
          baseUrl: `${window.location.protocol}//${window.location.host}/`
        });
      }
    })();

    return () => {
      PSPDFKit && PSPDFKit.unload(container)
    };
  }, []);

  return (
    <>
      <div ref={containerRef} style={{ height: "100vh" }} />
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
}