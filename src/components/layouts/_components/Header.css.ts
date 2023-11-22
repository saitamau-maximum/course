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
};
