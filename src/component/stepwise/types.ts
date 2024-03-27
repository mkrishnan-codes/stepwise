type Direction = "row"|"col";
interface Steps {
    direction?:Direction;
}
interface BaseStep {
    id:string;
    level?:number;
    completed?:boolean;
}
export interface Step extends BaseStep{
    name?:string;
}