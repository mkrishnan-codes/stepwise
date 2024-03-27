type IDirection = "row"|"col";
export interface ISteps {
    direction?:IDirection;
}
interface IBaseStep {
    id:string;
    level?:number;
    completed?:boolean;
}
export interface IStep extends IBaseStep{
    name?:string;
}