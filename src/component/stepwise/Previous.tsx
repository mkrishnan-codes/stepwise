import React from "react";
import { Direction, IStep, StepProps } from "./types";
import { getPathStyles } from "./style";

const Previous = <T extends Direction>({ index, direction }: StepProps<T>) => {
  return index > 0 ? <div style={getPathStyles(direction)} /> : null;
};

export default Previous;
