import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../model/mocktask';


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {
  @Input() tempTask:TaskModel = {
    title:"",
    description: "",
    date:""
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
