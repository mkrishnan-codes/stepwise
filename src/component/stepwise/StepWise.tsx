import React from "react";
import { Direction, IStep, ISteps } from "./types";
import Step from "./Step";

interface StepWiseProps<T extends Direction> extends ISteps<T> {
  config: IStep[];
  // data:string[];
  defaultConfig?: IStep;
}

const StepWise = <T extends Direction>({
  config,
  direction,
  defaultConfig,
  labelPlacement,
}: StepWiseProps<T>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
      }}
    >
      {config.map(({ id, ...stp },index) => (
        <Step
          {...defaultConfig}
          {...stp}
          id={id}
          key={id}
          labelPlacement={labelPlacement}
          index={index}
          numberOfSteps={config.length}
          direction={direction}
        />
      ))}
    </div>
  );
};

export default StepWise;
