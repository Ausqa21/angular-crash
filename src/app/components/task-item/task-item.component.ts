import { Task } from './../../Task';
import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // @Input() task: Task = {
  //   id: 0,
  //   text: "",
  //   day: "",
  //   reminder: false,
  // };

  @Input() task!: Task;
  faTimes = faTimes;

  constructor() {
   }

  ngOnInit(): void {
  }

}
