import { Component, OnInit } from '@angular/core';
import {  ReactiveFormsModule , FormGroup , FormControl,Validators} from '@angular/forms';



@Component({
  selector: 'app-emp-model-form',
  templateUrl: './emp-model-form.component.html',
  styleUrls: ['./emp-model-form.component.css']
})
export class EmpModelFormComponent implements OnInit {

  public empForm:FormGroup;

  constructor() { 
 this.empForm=new FormGroup({
 empId:new FormControl('',Validators.required),
 name :new FormControl(),
 AddressDetail: new FormGroup({
   city: new FormControl('',Validators.minLength(6)),
   state: new FormControl()
 })

 

}
   

 )

  }

  ngOnInit() {
  }

  displayForm(){

    console.log("empData:::",this.empForm.value);
   //console.log("empData:::"+empData.value);


  }

}
