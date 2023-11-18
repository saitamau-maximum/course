import { globalStyle } from "@vanilla-extract/css";

import { colorVars } from "./contract.css";
import { vars } from ".";

globalStyle("body", {
  backgroundColor: colorVars.gray[2],
  fontFamily:
    'X, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  margin: 0,
  padding: 0,
  color: colorVars.gray[12],

  minHeight: "100dvh",
  height: "100%",
  lineHeight: 1,
});

globalStyle("html", {
  scrollPaddingTop: "50dvh",
  scrollBehavior: "smooth",
});

globalStyle("*", {
  margin: 0,
});
