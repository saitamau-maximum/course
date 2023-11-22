import { constants, vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    marginLeft: constants.size.leftPanelWidth,
  }),
  main: style({
    display: "flex",
    flexDirection: "column",
    minHeight: `calc(100dvh - ${constants.size.headerHeight})`,
    maxWidth: constants.size.contentMaxWidth,
    width: vars.spacing.full,
    margin: "0 auto",
    padding: `0 ${vars.spacing[4]}`,
    boxSizing: "border-box",
  }),
};
