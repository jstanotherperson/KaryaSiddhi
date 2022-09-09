import { Component, OnInit , Input} from '@angular/core';
import { TaskHeading } from '../model/mockheading';


@Component({
  selector: 'app-my-priority-heading',
  templateUrl: './my-priority-heading.component.html',
  styleUrls: ['./my-priority-heading.component.scss']
})
export class MyPriorityHeadingComponent implements OnInit {
  isClicked:boolean=false;
  display(){
    alert("Hello World!");
    // document.getElementById("displayform").style.display = "block";
    // this.isClicked=true;
  }
  @Input() tempTask:TaskHeading = {
    title:"",
    description: ""
  } 



  constructor() { }

  ngOnInit(): void {
  }

}
