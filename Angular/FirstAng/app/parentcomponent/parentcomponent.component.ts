import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  constructor() { }

 nameParent="name";
 fromChild="Enter Child Name"
 handleUserUpdated(CV:any):void{
   console.log("CV"+CV);
   this.fromChild=CV;

  

 }

  ngOnInit() {
  }

}
