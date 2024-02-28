import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/AkkuratMonoLLWeb-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="AkkuratRegular"
    />,
    <link
      rel="preload"
      href="/fonts/AkkuratMonoLLWeb-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="AkkuratBold"
    />,
    <link
      rel="preload"
      href="/fonts/AkkuratMonoLLWeb-Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="AkkuratItalic"
    />,
    <link
      rel="preload"
      href="/fonts/AkkuratMonoLLWeb-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="AkkuratBoldItalic"
    />,
  ]);
};
