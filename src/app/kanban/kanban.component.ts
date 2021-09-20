import { Component, OnInit } from '@angular/core';
import { BoardCol, Task } from '../definitions/board-col';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})

export class KanbanComponent implements OnInit {

  public boardData: BoardCol[] = [];
  public currentColIndex: number;
  public currentTaskDragged: Task;

  constructor() { }

  ngOnInit(): void {
    this.initializeBoardData();
  }

  public initializeBoardData(): void {
    this.boardData =
      [
        { heading: "Started", tasks: [{ id: 1, value: "Task 1" }, { id: 2, value: "Task 2" }, { id: 3, value: "Task 3" }] },
        { heading: "25% Done", tasks: [{ id: 4, value: "Task 4" }, { id: 5, value: "Task 5" }, { id: 6, value: "Task 6" }] },
        { heading: "75% Done", tasks: [{ id: 7, value: "Task 7" }, { id: 8, value: "Task 8" }, { id: 9, value: "Task 9" }] },
        { heading: "Finished", tasks: [{ id: 10, value: "Task 10" }, { id: 11, value: "Task 11" }, { id: 12, value: "Task 12" }] }
      ]
  }

  public onTaskDragStart(event: any, task: Task, colIndex: number): void {
    this.currentColIndex = colIndex;
    this.currentTaskDragged = task;
  }

  public onTaskDrop(event: any, colIndex: number): void {
    if(this.currentColIndex != colIndex){
      this.boardData[this.currentColIndex].tasks.splice(this.boardData[this.currentColIndex].tasks.indexOf(this.currentTaskDragged),1);
      this.boardData[colIndex].tasks.unshift(this.currentTaskDragged);
    }else{
      alert("Column reordering is not allowed.")
    }
  }
}