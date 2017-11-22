import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {


employees=[];
constructor(private empData:EmployeeServiceService) { }

  ngOnInit() {
    this.empData.getEmp().
    subscribe(resEmpData=>this.employees=resEmpData)
    //this.empData=>this.employees=getEmp().

  }

}
