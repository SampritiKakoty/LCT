import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FirebaseService} from '../firebase.service';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

 

  employees=[];
  constructor(private empData:FirebaseService) { }
  
    ngOnInit() {
      this.empData.getEmpDetails().
      subscribe(resEmpData=>this.employees=resEmpData)
      //this.empData=>this.employees=getEmp().
  
    }

}
