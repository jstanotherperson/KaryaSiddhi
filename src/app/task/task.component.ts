import { Component, OnInit,Input, Output } from '@angular/core';
import { TaskHeading } from '../model/mockheading';
import { TaskModel } from '../model/mocktask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }
  date = new Date();
  hours = this.date.getHours();
  greetingMsg(): string {
    let msg = this.hours < 12 ? 'Good Morning' : (this.hours < 16 ? 'Good Afternoon' : 'Good Evening');
    return msg;
  }

  ngOnInit(): void {
  }
  taskHeadingList:TaskHeading[]=[{
    title:"My Priorities",
    description:"(next 3 days - high priority)"
  }]
  taskList:TaskModel[]=[{title:"Complete budgeting for FY 2023",
  description:"Budgeting for FY 2023. This is required by the Finance department. A further longer description Is possible.",
  date:"26th Aug 2022"


  },{
  title:"Complete wireframes",
  description:"Wireframes required to be created in plain CSS & HTML and JavaScript.",
  date:"27th Aug 2022"
 

  },
  {
    title:"Reward Kazoo Points ",
    description:"Reward Kazoo points for the Jul 2022 townhall’ winners.",
    date:"27th Aug 2022"
  
    }]

}
