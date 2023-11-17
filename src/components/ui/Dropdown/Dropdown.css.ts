import { constants, vars } from "@/styles";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(4px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-4px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-4px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(4px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const styles = {
  menuContent: style({
    minWidth: "160px",
    backgroundColor: vars.color.gray[1],
    borderRadius: vars.spacing[3],
    border: `1px solid ${vars.color.gray[6]}`,
    padding: vars.spacing[1],
    boxShadow: `0 ${vars.spacing[2]} ${vars.spacing[6]} calc(-1 * ${vars.spacing[2]}) rgba(0,0,0,.2)`,
    animationDuration: "1000ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
  }),
  menuItem: style({

    fontSize: vars.font.size.sm,
    color: vars.color.gray[12],
    borderRadius: vars.spacing[2],
    display: "flex",
    alignItems: "center",
    gap: vars.spacing[2],
    padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
    userSelect: "none",
    cursor: "pointer",
    outline: "none",
    transition: vars.transition.normal("background-color"),
    border: "none",
    background: "transparent",
    width: "100%",
    textDecoration: "none",
    boxSizing: "border-box",

    "@media": {
      "(hover: hover)": {
        ":hover": {
          backgroundColor: vars.color.gray[3],
          color: vars.color.gray[12],
        },
      },
    },
  }),
  icon: style({
    marginRight: vars.spacing[2],
    color: vars.color.gray[11],
    display: "contents",
  }),
  separator: style({
    height: 1,
    backgroundColor: vars.color.gray[4],
    margin: `${vars.spacing[2]} 0`,
  }),
  triggerButton: style({
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    outline: "none",
  }),
};

globalStyle(`${styles.menuContent}[data-side="top"]`, {
  animationName: slideDownAndFade,
});

globalStyle(`${styles.menuContent}[data-side="right"]`, {
  animationName: slideLeftAndFade,
});

globalStyle(`${styles.menuContent}[data-side="bottom"]`, {
  animationName: slideUpAndFade,
});

globalStyle(`${styles.menuContent}[data-side="left"]`, {
  animationName: slideRightAndFade,
});
