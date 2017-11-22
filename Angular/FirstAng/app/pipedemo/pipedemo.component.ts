import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

name="Sampriti Kakoty";
salary:number=6.0001;
Marks:number=0.34;
dateOfBirth;
review:string="Happy to help you !!!!!!";


  ProductList=[
  
    {PName:'Ipad', Manufacturer:'Apple',Price:23456.66,dom:new Date("October 13, 2014 11:13:00"),hike:0.05},
    {PName:'Ipod', Manufacturer:'Apple',Price:12356.66,dom:new Date("October 1, 2014 11:13:00"),hike:0.05},
    {PName:'Iphone', Manufacturer:'Apple',Price:22456.66},
    {PName:'MotoG', Manufacturer:'Motorola',Price:21456.66},
    {PName:'MotoX', Manufacturer:'Motorola',Price:33356.66},
    {PName:'MotoE', Manufacturer:'Motorola',Price:24446.66},
    {PName:'MotoZ', Manufacturer:'Motorola',Price:23236.66},
    {PName:'Samsung', Manufacturer:'Samsung',Price:43566.66} ];
   
   /*

  ProductList1=[
    {PName:'Ipad', Manufacturer:'Apple',Price:23456.66,dom:new Date("October 13, 2014 11:13:00"),hike:0.05},
    {PName:'Ipod', Manufacturer:'Apple',Price:12356.66},dom:new Date("October 1, 2014 11:13:00"),hike:0.07},
    {PName:'Iphone', Manufacturer:'Apple',Price:22456.66,dom:new Date("October 3, 2014 11:13:00"),hike:0.08},
    {PName:'MotoG', Manufacturer:'Motorola',Price:21456.66,dom:new Date("October 16, 2014 11:13:00"),hike:0.09},
    {PName:'MotoX', Manufacturer:'Motorola',Price:33356.66,dom:new Date("October 13, 2014 11:13:00"),hike:0.05},
    {PName:'MotoE', Manufacturer:'Motorola',Price:24446.66,dom:new Date("October 1, 2017 11:13:00"),hike:0.05},
    {PName:'MotoZ', Manufacturer:'Motorola',Price:23236.66,dom:new Date("October 13, 2016 11:13:00"),hike:0.05},
    {PName:'Samsung', Manufacturer:'Samsung',Price:43566.66,dom:new Date("October 13, 2014 11:13:00"),hike:0.05} ];

*/
  constructor() {
    this.dateOfBirth=new Date("October 13, 2014 11:13:00");
   }

  ngOnInit() {
  }

}
