import { vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    padding: vars.spacing[4],
  }),
  titleLink: style({
    fontSize: vars.font.size.lg,
    fontWeight: "bold",
    color: vars.color.gray[12],
    textDecoration: "none",
    display: "block",
    width: "100%",
    textAlign: "center",
  }),
};
