import { vars, constants } from "@/styles";
import { createVar, globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  contents: style({
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing[4],
  }),
};

globalStyle(`${styles.contents} > *:first-child`, {
  marginTop: vars.spacing.none,
});

globalStyle(`${styles.contents} a`, {
  color: vars.color.gray[12],
  wordBreak: "break-word",
  textUnderlineOffset: "0.2em",
  outline: "none",
  position: "relative",
});

globalStyle(`${styles.contents} a:focus-visible`, {
  outline: "1px solid",
  outlineColor: vars.color.green[8],
  outlineOffset: "4px",
  outlineWidth: "2px",
  borderRadius: "2px",
});

globalStyle(
  `${styles.contents} a[data-footnote-ref], ${styles.contents} a[data-footnote-backref]`,
  {
    fontSize: vars.font.size.sm,
    color: vars.color.green[11],
    textDecoration: "none",
    padding: vars.spacing[1],
  }
);
globalStyle(`${styles.contents} .icon-link:before`, {
  content: "X",
  marginRight: vars.spacing[1],
});

const HEADING_H1 = `${styles.contents} h1`;
const HEADING_H2 = `${styles.contents} h2`;
const HEADING_H3 = `${styles.contents} h3`;
const HEADING_H4 = `${styles.contents} h4`;
const HEADING_H5 = `${styles.contents} h5`;
const HEADING_H6 = `${styles.contents} h6`;
const ALL_HEADINGS = [
  HEADING_H1,
  HEADING_H2,
  HEADING_H3,
  HEADING_H4,
  HEADING_H5,
  HEADING_H6,
];

globalStyle(HEADING_H2, {
  fontSize: vars.font.size["2xl"],
  fontWeight: 700,
  color: vars.color.gray[12],
  marginTop: vars.spacing[8],
  borderBottom: `1px solid ${vars.color.gray[4]}`,
});

globalStyle(HEADING_H3, {
  fontSize: vars.font.size.xl,
  fontWeight: 700,
  color: vars.color.gray[12],
  marginTop: vars.spacing[6],
});

globalStyle(`${HEADING_H4}, ${HEADING_H5}, ${HEADING_H6}`, {
  fontSize: vars.font.size.lg,
  fontWeight: 700,
  color: vars.color.gray[12],
  marginTop: vars.spacing[4],
});

globalStyle(ALL_HEADINGS.join(", "), {
  position: "relative",
});

const ALL_HEADINGS_WITH_ANCHOR = ALL_HEADINGS.map(
  (selector) => `${selector} > a`
);

globalStyle(ALL_HEADINGS_WITH_ANCHOR.join(", "), {
  position: "absolute",
  top: "50%",
  left: "-1.5rem",
  transform: "translateY(-50%)",
  textDecoration: "none",
  transition: "opacity 0.2s ease-in-out",
  opacity: 0,

  "@media": {
    [`screen and (max-width: ${constants.breakpoint.mobile})`]: {
      display: "none",
    },
  },
});

const ALL_HEADINGS_WITH_ANCHOR_BEFORE = ALL_HEADINGS.map(
  (selector) => `${selector} > a:before`
);

globalStyle(ALL_HEADINGS_WITH_ANCHOR_BEFORE.join(", "), {
  content: 'url("/assets/link.svg")',
  display: "inline-block",
  padding: vars.spacing[1],
  width: "1.25rem",
  height: "1.25rem",
});

const ALL_HEADINGS_HOVER_WITH_ANCHOR = ALL_HEADINGS.map(
  (selector) => `${selector}:hover > a`
);

globalStyle(ALL_HEADINGS_HOVER_WITH_ANCHOR.join(", "), {
  "@media": {
    "(hover: hover)": {
      opacity: 1,
    },
  },
});

const ALL_HEADINGS_FOCUS_VISIBLE_WITH_ANCHOR = ALL_HEADINGS.map(
  (selector) => `${selector} > a:focus-visible`
);

globalStyle(ALL_HEADINGS_FOCUS_VISIBLE_WITH_ANCHOR.join(", "), {
  opacity: 1,
});

globalStyle(`${styles.contents} .link-card`, {
  display: "flex",
  width: "100%",
  height: "7rem",
  borderRadius: vars.spacing[2],
  textDecoration: "none",
  border: `1px solid ${vars.color.gray[4]}`,
  overflow: "hidden",

  "@media": {
    [`screen and (max-width: ${constants.breakpoint.mobile})`]: {
      height: "6rem",
    },
  },
});

globalStyle(`${styles.contents} .link-card:hover`, {
  "@media": {
    "(hover: hover)": {
      backgroundColor: vars.color.gray[2],
    },
  },
});

globalStyle(`${styles.contents} .link-card:focus-visible`, {
  border: `1px solid ${vars.color.green[8]}`,
  outline: "none",
});

globalStyle(`${styles.contents} .link-card .link-card__image`, {
  width: "auto",
  height: "100%",
  aspectRatio: "1200 / 630",
  overflow: "hidden",
  objectFit: "cover",
  flexShrink: 0,
  margin: 0,
  border: "none",
  borderRadius: 0,

  "@media": {
    [`screen and (max-width: ${constants.breakpoint.mobile})`]: {
      width: "6rem",
      height: "6rem",
    },
  },
});

globalStyle(`${styles.contents} .link-card .link-card__content`, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexGrow: 1,
  gap: vars.spacing[4],
  padding: `${vars.spacing.none} ${vars.spacing[6]}`,

  "@media": {
    [`screen and (max-width: ${constants.breakpoint.mobile})`]: {
      gap: vars.spacing[2],
      padding: `${vars.spacing.none} ${vars.spacing[4]}`,
    },
  },
});

globalStyle(`${styles.contents} .link-card .link-card__title`, {
  fontSize: vars.font.size.base,
  lineHeight: 1.5,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,

  "@media": {
    [`screen and (max-width: ${constants.breakpoint.mobile})`]: {
      fontSize: vars.font.size.sm,
    },
  },
});

globalStyle(`${styles.contents} .link-card .link-card__meta`, {
  display: "flex",
  alignItems: "center",
  gap: vars.spacing[2],
});

globalStyle(`${styles.contents} .link-card .link-card__favicon`, {
  width: "1rem",
  height: "1rem",
  borderRadius: vars.spacing[1],
  overflow: "hidden",
  backgroundSize: "cover",
  flexShrink: 0,
});

globalStyle(`${styles.contents} .link-card .link-card__domain`, {
  fontSize: vars.font.size.sm,
  color: vars.color.gray[10],
});

globalStyle(`${styles.contents} p`, {
  fontSize: vars.font.size.base,
  color: vars.color.gray[11],
});

globalStyle(`${styles.contents} ul`, {
  paddingLeft: vars.spacing[4],
});

globalStyle(`${styles.contents} ol`, {
  paddingLeft: vars.spacing[6],
});

globalStyle(`${styles.contents} ul li`, {
  listStyle: "none",
  position: "relative",
});

globalStyle(`${styles.contents} li`, {
  position: "relative",
  lineHeight: 1.8,
});

globalStyle(`${styles.contents} ul li::before`, {
  content: '"-"',
  position: "absolute",
  left: `calc(-1 * ${vars.spacing[4]})`,
  color: vars.color.gray[11],
});

globalStyle(`${styles.contents} table`, {
  width: "100%",
  borderCollapse: "collapse",
});

globalStyle(`${styles.contents} table th`, {
  padding: vars.spacing[2],
  fontWeight: 700,
  color: vars.color.gray[11],
  borderBottom: `1px solid ${vars.color.gray[4]}`,
});

globalStyle(`${styles.contents} table tr + tr > td`, {
  borderTop: `1px solid ${vars.color.gray[4]}`,
});

globalStyle(`${styles.contents} table td`, {
  padding: vars.spacing[2],
  lineHeight: 1.8,
});

globalStyle(`${styles.contents} hr`, {
  border: "none",
  height: "1px",
  backgroundColor: vars.color.gray[4],
  margin: `${vars.spacing[4]} 0`,
});

globalStyle(`${styles.contents} blockquote`, {
  borderLeft: `4px solid ${vars.color.gray[4]}`,
  paddingLeft: vars.spacing[4],
});

const annotationColorRGBVar = createVar();

globalStyle(`${styles.contents} blockquote.annotation-block`, {
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  borderRadius: vars.spacing[2],
});

globalStyle(`.dark ${styles.contents} blockquote.annotation-block`, {
  backgroundColor: `rgba(${annotationColorRGBVar}, 0.05)`,
  border: `1px solid rgba(${annotationColorRGBVar}, 0.125)`,
});

globalStyle(`.light ${styles.contents} blockquote.annotation-block`, {
  backgroundColor: `rgba(${annotationColorRGBVar}, 0.1)`,
  border: `1px solid rgba(${annotationColorRGBVar}, 0.25)`,
});

globalStyle(`${styles.contents} .annotation-block .annotation`, {
  fontWeight: 600,
});

globalStyle(`.dark ${styles.contents} .annotation-block .annotation`, {
  color: `rgba(${annotationColorRGBVar}, 0.75)`,
});

globalStyle(`.light ${styles.contents} .annotation-block .annotation`, {
  color: `rgba(${annotationColorRGBVar}, 1)`,
});

globalStyle(
  `${styles.contents} .annotation-block[data-annotation-type="warning"]`,
  {
    vars: {
      [annotationColorRGBVar]: `246, 173, 85`,
    },
  }
);

globalStyle(
  `${styles.contents} .annotation-block[data-annotation-type="note"]`,
  {
    vars: {
      [annotationColorRGBVar]: `99, 179, 237`,
    },
  }
);

globalStyle(
  `${styles.contents} .annotation-block[data-annotation-type="important"]`,
  {
    vars: {
      [annotationColorRGBVar]: `252, 129, 129`,
    },
  }
);

globalStyle(`${styles.contents} .contains-task-list`, {
  padding: 0,
});

globalStyle(`${styles.contents} .contains-task-list .contains-task-list`, {
  paddingLeft: vars.spacing[6],
});

globalStyle(`${styles.contents} .task-list-item::before`, {
  display: "none",
});

globalStyle(`${styles.contents} :not(pre) > code`, {
  fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.spacing[1],
  border: `1px solid ${vars.color.gray[4]}`,
  backgroundColor: vars.color.gray[2],
  color: vars.color.gray[12],
  fontSize: vars.font.size.sm,
});

globalStyle(`${styles.contents} .code-block`, {
  position: "relative",
});

globalStyle(`${styles.contents} .code-block pre`, {
  border: `1px solid ${vars.color.gray[4]}`,
  background: vars.color.gray[1],
  padding: vars.spacing[4],
  borderRadius: vars.spacing[2],
  overflowX: "auto",
  overflowY: "hidden",
});

globalStyle(`${styles.contents} .code-block code`, {
  fontSize: vars.font.size.sm,
  fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
  lineHeight: 1.8,
});

globalStyle(`${styles.contents} .code-block .code-copy-button`, {
  position: "absolute",
  top: `calc(${vars.spacing[2]} + 1px / 2)`, // gap of code block 1 line
  right: vars.spacing[2],
  width: "2rem",
  height: "2rem",
  color: vars.color.gray[9],
  backgroundColor: vars.color.gray[3],
  borderRadius: vars.spacing[2],
  border: "none",
  cursor: "pointer",
  opacity: 0,
  transition: "opacity 0.2s ease-in-out, background-color 0.2s ease-in-out",
});

globalStyle(`${styles.contents} .code-block:hover .code-copy-button`, {
  "@media": {
    "(hover: hover)": {
      opacity: 1,
    },
  },
});

globalStyle(`${styles.contents} .code-block .code-copy-button svg`, {
  position: "absolute",
  inset: 0,
  margin: "auto",
  width: "1rem",
  height: "1rem",
});

globalStyle(
  `${styles.contents} .code-block .code-copy-button .code-check-icon`,
  {
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
  }
);

globalStyle(
  `${styles.contents} .code-block .code-copy-button.copied .code-check-icon`,
  {
    opacity: 1,
    color: vars.color.gray[11],
  }
);

globalStyle(
  `${styles.contents} .code-block .code-copy-button .code-copy-icon`,
  {
    opacity: 1,
    transition: "opacity 0.2s ease-in-out",
  }
);

globalStyle(
  `${styles.contents} .code-block .code-copy-button.copied .code-copy-icon`,
  {
    opacity: 0,
  }
);

globalStyle(`${styles.contents} .code-block .code-copy-button:hover`, {
  backgroundColor: vars.color.gray[4],
});

globalStyle(`${styles.contents} .code-block .code-copy-button:focus-visible`, {
  outline: "none",
  boxShadow: `0 0 0 2px ${vars.color.green[8]}`,
  opacity: 1,
});

globalStyle(`${styles.contents} img`, {
  width: vars.spacing.full,
  height: "auto",
  borderRadius: vars.spacing[2],
  margin: `${vars.spacing[4]} 0`,
  border: `1px solid ${vars.color.gray[4]}`,
});

globalStyle(`${styles.contents} .math-display`, {
  width: "fit-content",
  position: "relative",
  transform: "translateX(-50%)",
  padding: `${vars.spacing[4]} ${vars.spacing[8]}`,
  left: "50%",
  zIndex: vars.zIndex.forward,
  boxSizing: "border-box",

  "@media": {
    [`screen and (max-width: ${constants.breakpoint.tablet})`]: {
      overflowX: "auto",
      width: "100%",
    },
  },
});

globalStyle(`${styles.contents} .katex-display`, {
  background: vars.color.gray[1],
  boxShadow: `0 0 1rem 2rem ${vars.color.gray[1]}`,
});

globalStyle(`${styles.contents} .footnotes`, {
  display: "contents",
});
