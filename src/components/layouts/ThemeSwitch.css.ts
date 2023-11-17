import { vars } from "@/styles";
import { globalStyle, style } from "@vanilla-extract/css";

const icon = style({
  position: "absolute",
  inset: 0,
  margin: "auto",
  transition: vars.transition.normal("transform"),
});

export const styles = {
  button: style({
    position: "relative",
    width: "2.5rem",
    height: "2.5rem",
    border: "none",
    background: "transparent",
    borderRadius: vars.spacing[2],
    boxSizing: "border-box",
    cursor: "pointer",
    fill: "none",
    stroke: vars.color.gray[11],
    overflow: "hidden",
    "@media": {
      "(hover: hover)": {
        ":hover": {
          backgroundColor: vars.color.gray[3],
        },
      },
    },
  }),
  sun: style([
    icon,
    {
      transform: "translateY(-200%)",
    },
  ]),
  moon: style([
    icon,
    {
      transform: "translateY(200%)",
    },
  ]),
};

globalStyle(`.light ${styles.sun}`, {
  transform: "translateY(0)",
});

globalStyle(`.dark ${styles.moon}`, {
  transform: "translateY(0)",
});
