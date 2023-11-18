import { constants, vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${vars.spacing[4]}`,
    height: constants.size.headerHeight,
    maxWidth: constants.size.headerMaxWidth,
    margin: "0 auto",
  }),
  sideContainer: style({
    display: "flex",
    alignItems: "center",
    gap: vars.spacing[4],
  }),
  nav: style({
    display: "flex",
    alignItems: "center",
  }),
  navLink: style({
    color: vars.color.gray[12],
    padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
    textDecoration: "none",
    transition: vars.transition.normal("color"),

    "@media": {
      "(hover: hover)": {
        ":hover": {
          color: vars.color.gray[11],
        },
      },
    },
  }),
  loginLink: style({
    color: vars.color.gray[1],
    background: `linear-gradient(to bottom right, ${vars.color.gradient.from}, ${vars.color.gradient.to})`,
    borderRadius: vars.spacing[2],
    padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
    margin: `0 ${vars.spacing[3]}`,
    textDecoration: "none",
    transition: vars.transition.normal("opacity"),

    "@media": {
      "(hover: hover)": {
        ":hover": {
          opacity: 0.8,
        },
      },
    },
  }),
};
