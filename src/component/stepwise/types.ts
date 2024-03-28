import { CSSProperties } from "react";
export type Direction = "horizontal" | "vertical";

export type LabelPlacementOnVertical = "left" | "right";
export type LabelPlacementOnHorizontal = "top" | "bottom";

export type LabelPlacement<T extends Direction> = T extends "horizontal"
  ? LabelPlacementOnHorizontal
  : LabelPlacementOnVertical;

export interface ISteps<T extends Direction> {
  direction?: T;
  labelPlacement?: LabelPlacement<T>;
}
interface IBaseStep {
  id: string;
  completion?: number;
}
export interface IStep extends IBaseStep {
  name?: string;
}
export type StepProps<T extends Direction> = IStep & {
  labelPlacement?: LabelPlacement<T>;
  index: number;
  numberOfSteps: number;
  direction?:Direction
};
