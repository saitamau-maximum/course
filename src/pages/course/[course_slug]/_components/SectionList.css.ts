import { constants, vars } from "@/styles";
import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing[2],
    padding: `0 ${vars.spacing[4]}`,
  }),
  sectionLink: style({
    display: "flex",
    alignItems: "center",
    gap: vars.spacing[2],
    padding: vars.spacing[2],
    borderRadius: vars.spacing[2],
    color: vars.color.gray[11],
    textDecoration: "none",
    transition: "background-color 0.2s ease",
    fontSize: vars.font.size.sm,

    ":hover": {
      backgroundColor: vars.color.gray[3],
    },
  }),
  sectionNumber: style({
    fontSize: vars.font.size.xs,
    fontVariantNumeric: "tabular-nums",
    fontWeight: "bold",
  }),
  sectionLinkActive: style({
    color: vars.color.gray[12],
  }),
};

globalStyle(`${styles.sectionLinkActive} > ${styles.sectionNumber}`, {
  color: vars.color.green[10],
  fontSize: vars.font.size.xs,
});
