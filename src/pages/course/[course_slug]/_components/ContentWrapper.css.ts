import { vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    margin: `${vars.spacing[16]} 0`,
  }),
  meta: style({
    display: "flex",
    marginBottom: vars.spacing[8],
  }),
  title: style({
    fontSize: vars.font.size["3xl"],
    fontWeight: "bold",
    color: vars.color.gray[12],
  }),
};
