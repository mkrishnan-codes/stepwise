import { CSSProperties } from "react";
import { Direction } from "./types";
const LENGTH = 100;
const BREADTH = 20;
const DIAMETER = 25;
const BG = "#cccccc";
export const nodeStyle: CSSProperties = {
  borderRadius: "50%",
  backgroundColor: BG,
  width: DIAMETER,
  height: DIAMETER,
};

const hPathStyle: CSSProperties = {
  width: LENGTH,
  height: BREADTH,
  backgroundColor: BG,
};
const vPathStyle: CSSProperties = {
  width: BREADTH,
  height: LENGTH,
  backgroundColor: BG,
};

export const getPathStyles = (direction?: Direction) => {
  if (direction === "horizontal") {
    return hPathStyle;
  }
  return vPathStyle;
};

export const getFlexPropsFromDirection = (
  direction?: Direction
): CSSProperties => {
  if (direction === "horizontal") {
    return {
      display: "flex",
      flexDirection: "column",
    };
  }
  return {
    display: "flex",
    flexDirection: "row",
  };
};
