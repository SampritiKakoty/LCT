import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  /* employees = [
    
{empno:1231,empname:'Thangaraj',age:21,salary:12345.11},
    {empno:1232,empname:'Sindhu',age:22,salary:34512.22},
    {empno:1233,empname:'Snigdha',age:23,salary:12343.33},
    {empno:1234,empname:'Bhagya',age:24,salary:12344.44},
    {empno:1235,empname:'Bhavya',age:25,salary:12345.55},
    {empno:1236,empname:'Pavana',age:26,salary:12346.66},
    {empno:1237,empname:'Seema',age:27,salary:12347.77},
    {empno:1238,empname:'Karthik',age:28,salary:12348.88},
    {empno:1239,empname:'Prashantha',age:29,salary:12349.99},
    {empno:1240,empname:'Manoj',age:30,salary:12340.00}
  
]; */

  constructor() { }

  ngOnInit() {
  }

  DisplayDetails(formData:any){

    console.log("Display Emp No::::::"+formData.empNo);
    console.log("City:::::::: "+formData.AddressDetails.empCity);

  }

}
