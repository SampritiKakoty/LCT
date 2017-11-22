import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  //@Input() parentName: string;
   public childName:string="Pinki";
 @Output() userUpdated: EventEmitter<any> = new EventEmitter<any>();


 sendParent():void{

   console.log("childName:::::"+this.childName);
   this.userUpdated.emit(this.childName);
 }
 

  constructor() {
    
   }

  ngOnInit() {
  }

}
