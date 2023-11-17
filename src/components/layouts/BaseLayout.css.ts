import { constants, vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  main: style({
    display: "flex",
    flexDirection: "column",
    minHeight: "100dvh",
    maxWidth: constants.size.contentMaxWidth,
    width: vars.spacing.full,
    margin: "0 auto",
    padding: `0 ${vars.spacing[4]}`,
  }),
};
