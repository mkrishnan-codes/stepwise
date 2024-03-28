import React from "react";
import { Direction, IStep, StepProps } from "./types";
import { getFlexDirectionFromLabelPlacement } from "./utils";
import { nodeStyle } from "./style";

const Node = <T extends Direction>({ name, labelPlacement }: StepProps<T>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: getFlexDirectionFromLabelPlacement(labelPlacement),
      }}
    >
      <div>{name}</div>
      <div style={nodeStyle} />
    </div>
  );
};

export default Node;
