export interface BoardCol {
    heading:string;
    tasks: Task[];
}

export interface Task{
    id:number,
    value:string
}