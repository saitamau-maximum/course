import { vars } from "@/styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  avatar: style({
    width: vars.spacing[10],
    height: vars.spacing[10],
    borderRadius: "50%",
    display: "block",
  }),
};
