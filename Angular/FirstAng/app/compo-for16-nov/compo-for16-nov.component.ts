import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-for16-nov',
  templateUrl: './compo-for16-nov.component.html',
  styleUrls: ['./compo-for16-nov.component.css']
})
export class CompoFor16NovComponent  {

  num1:number;
  num2:number;
  sumOfNum:number=0;
  //noOfLikes:number=0;

   ProductList=[
    {PName:'Ipad', Manufacturer:'Apple',Price:23456.66,noOfLikes:0},
    {PName:'Ipod', Manufacturer:'Apple',Price:12356.66,noOfLikes:0},
    {PName:'Iphone', Manufacturer:'Apple',Price:22456.66,noOfLikes:0},
    {PName:'MotoG', Manufacturer:'Motorola',Price:21456.66,noOfLikes:0},
    {PName:'MotoX', Manufacturer:'Motorola',Price:33356.66,noOfLikes:0},
    {PName:'MotoE', Manufacturer:'Motorola',Price:24446.66,noOfLikes:0},
    {PName:'MotoZ', Manufacturer:'Motorola',Price:23236.66,noOfLikes:0},
    {PName:'Samsung', Manufacturer:'Samsung',Price:43566.66,noOfLikes:0} ];


 noOfLikesCall=function(index){
   //console.log("index"+index); 
  this.ProductList[index].noOfLikes = this.ProductList[index].noOfLikes + 1;
  //console.log("index"+index); 
  }
  calculateSum=function(){
    
  this.sumOfNum = this.num1 + this.num2;
  }
  constructor() { }



}
