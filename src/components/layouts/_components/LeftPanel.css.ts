import { constants, vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    width: constants.size.leftPanelWidth,
    height: "100vh",
    background: vars.color.gray[1],
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: vars.spacing[4],
    position: "fixed",
    top: 0,
    left: 0,
  }),
};
