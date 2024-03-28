import React from "react";
import { Direction, IStep, LabelPlacement, StepProps } from "./types";
import Previous from "./Previous";
import Next from "./Next";
import Node from "./Node";

const Step = <T extends Direction>(props: StepProps<T>) => {
  return (
    <div style={{display:"flex"}}>
      <Previous  {...props}/>
      <Node {...props}/>
      <Next {...props} />
    </div>
  );
};

export default Step;
