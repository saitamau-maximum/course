import { globalStyle } from "@vanilla-extract/css";

import { colorVars } from "./contract.css";
import { vars } from ".";

globalStyle("body", {
  backgroundColor: colorVars.gray[1],
  fontFamily: '"Noto Sans", "Noto Sans JP", sans-serif',
  margin: 0,
  padding: 0,
  color: colorVars.gray[12],

  minHeight: "100dvh",
  height: "100%",
});

globalStyle("p, h1, h2, h3, h4, h5, h6, ul, ol, li", {
  lineHeight: vars.lineHeight.paragraph,
});

globalStyle("html", {
  scrollPaddingTop: "50dvh",
  scrollBehavior: "smooth",
});

globalStyle("*", {
  margin: 0,
});
