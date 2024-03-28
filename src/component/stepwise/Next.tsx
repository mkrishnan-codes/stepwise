import React from "react";
import { Direction, IStep, StepProps } from "./types";
import { hPathStyle, vPathStyle } from "./style";

const Next = <T extends Direction>({
  numberOfSteps,
  index,
  direction,
}: StepProps<T>) => {
  return index < numberOfSteps ? (
    <div style={direction === "horizontal" ? hPathStyle : vPathStyle} />
  ) : null;
};

export default Next;
