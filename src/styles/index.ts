import { _vars as vs } from "@/styles/theme.css";

export const vars = {
  ...vs,
  transition: {
    normal: (...properties: string[]) => {
      return properties
        .map((property) => `${property} 0.3s ease-in-out`)
        .join(", ");
    },
  },
};

export const constants = {
  breakpoint: {
    mobile: "768px",
    tablet: "1024px",
  },
  size: {
    headerHeight: "64px",
    headerMaxWidth: "1200px",
    contentMaxWidth: "1024px",
    leftPanelWidth: "240px",
  },
};
