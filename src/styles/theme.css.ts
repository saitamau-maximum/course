import { createGlobalTheme } from "@vanilla-extract/css";

import { colorVars } from "./contract.css";

createGlobalTheme(".light", colorVars, {
  gray: {
    1: "hsl(0 0% 99.0%)",
    2: "hsl(0 0% 97.3%)",
    3: "hsl(0 0% 95.1%)",
    4: "hsl(0 0% 93.0%)",
    5: "hsl(0 0% 90.9%)",
    6: "hsl(0 0% 88.7%)",
    7: "hsl(0 0% 85.8%)",
    8: "hsl(0 0% 78.0%)",
    9: "hsl(0 0% 52.3%)",
    10: "hsl(0 0% 43.5%)",
    11: "hsl(0 0% 27.0%)",
    12: "hsl(0 0% 9.0%)",
  },
  green: {
    1: "hsl(134 44% 99.0%)",
    2: "hsl(134 44% 97.3%)",
    3: "hsl(134 44% 95.1%)",
    4: "hsl(134 44% 93.0%)",
    5: "hsl(134 44% 90.9%)",
    6: "hsl(134 44% 88.7%)",
    7: "hsl(134 44% 85.8%)",
    8: "hsl(134 44% 78.0%)",
    9: "hsl(134 44% 56.1%)",
    10: "hsl(134 44% 52.3%)",
    11: "hsl(134 44% 43.5%)",
    12: "hsl(134 44% 34.0%)",
  },
  gradient: {
    from: "#63C178",
    to: "#34AA8E",
  },
});

createGlobalTheme(".dark", colorVars, {
  gray: {
    1: "hsl(0 0% 8.5%)",
    2: "hsl(0 0% 11.0%)",
    3: "hsl(0 0% 13.6%)",
    4: "hsl(0 0% 15.8%)",
    5: "hsl(0 0% 17.9%)",
    6: "hsl(0 0% 20.5%)",
    7: "hsl(0 0% 24.3%)",
    8: "hsl(0 0% 31.2%)",
    9: "hsl(0 0% 49.4%)",
    10: "hsl(0 0% 62.8%)",
    11: "hsl(0 0% 81.0%)",
    12: "hsl(0 0% 93.0%)",
  },
  green: {
    1: "hsl(134 44% 8.5%)",
    2: "hsl(134 44% 11.0%)",
    3: "hsl(134 44% 13.6%)",
    4: "hsl(134 44% 15.8%)",
    5: "hsl(134 44% 17.9%)",
    6: "hsl(134 44% 20.5%)",
    7: "hsl(134 44% 24.3%)",
    8: "hsl(134 44% 31.2%)",
    9: "hsl(134 44% 43.9%)",
    10: "hsl(134 44% 49.4%)",
    11: "hsl(134 44% 62.8%)",
    12: "hsl(134 44% 93.0%)",
  },
  gradient: {
    from: "#34AA8E",
    to: "#63C178",
  },
});

const fontVars = createGlobalTheme(":root", {
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "3rem",
  },
});

const spacingVars = createGlobalTheme(":root", {
  none: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  full: "100%",
});

const zIndexVars = createGlobalTheme(":root", {
  normal: "0",
  forward: "1",
  float: "10",
  windowFloat: "100",
  modal: "1000",
  overlay: "10000",
});

const lineHeightVars = createGlobalTheme(":root", {
  label: "1",
  paragraph: "1.8",
});

export const _vars = {
  color: colorVars,
  font: fontVars,
  spacing: spacingVars,
  zIndex: zIndexVars,
  lineHeight: lineHeightVars,
};
