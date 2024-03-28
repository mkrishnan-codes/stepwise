import { Direction, LabelPlacement } from "./types";

export const getFlexDirectionFromLabelPlacement = <T extends Direction>(
  labelPlacement?: LabelPlacement<T>
) => {
  switch (labelPlacement) {
    case "top":
      return "column";
    case "bottom":
      return "column-reverse";
    case "left":
      return "row";
    case "right":
      return "row-reverse";
    default:
     return "column";
  }
};
