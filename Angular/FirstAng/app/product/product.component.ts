import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   /*position:string="right";
   ProductId:number=1001;
   ProductName:string="Ipad";
   ProductDesc:string="AppleIpad";
   ProductPrice:number=2000;
   show:boolean=true;
   cone:boolean=true;
   ctwo:boolean=false;
   myClass=true;
   
   myTitleClass={
    'my_backgroundcolor':true,
    'red-title':true

   }

   
   mySize="60px";
     myColor="yellow";
     myBgColor="pink";
  */ 
  myColorShow;
  myNameDisplay:string="Sampriti "

 changeName=function name() {
   this.myNameDisplay="Sampriti Kakoty"
   
 }

 /*
   ProductList=[
    {PName:'Ipad', Manufacturer:'Apple',Price:23456.66},
    {PName:'Ipod', Manufacturer:'Apple',Price:12356.66},
    {PName:'Iphone', Manufacturer:'Apple',Price:22456.66},
    {PName:'MotoG', Manufacturer:'Motorola',Price:21456.66},
    {PName:'MotoX', Manufacturer:'Motorola',Price:33356.66},
    {PName:'MotoE', Manufacturer:'Motorola',Price:24446.66},
    {PName:'MotoZ', Manufacturer:'Motorola',Price:23236.66},
    {PName:'Samsung', Manufacturer:'Samsung',Price:43566.66} ];
  toggle() {
   
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
  }*/
  
    constructor() { }

  

}
