import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";
import React from "react";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" sizes="36x36" href="/favicon-36.png" />
        <link rel="icon" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" sizes="57x57" href="/favicon-57.png" />
        <link rel="icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="icon" sizes="76x76" href="/favicon-76.png" />
        <link rel="icon" sizes="96x96" href="/favicon-96.png" />
        <link rel="icon" sizes="114x114" href="/favicon-114-precomposed.png" />
        <link rel="icon" sizes="120x120" href="/favicon-120-precomposed.png" />
        <link rel="icon" sizes="144x144" href="/favicon-144-precomposed.png" />
        <link rel="icon" sizes="152x152" href="/favicon-152-precomposed.png" />
        <link rel="icon" sizes="180x180" href="/favicon-180-precomposed.png" />
        <link rel="icon" sizes="192x192" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon-114-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon-120-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon-144-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon-152-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-180-precomposed.png"
        />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png" />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
