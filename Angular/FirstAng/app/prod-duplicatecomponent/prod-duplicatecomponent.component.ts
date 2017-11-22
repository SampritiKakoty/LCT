import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-prod-duplicatecomponent',
  templateUrl: './prod-duplicatecomponent.component.html',
  styleUrls: ['./prod-duplicatecomponent.component.css'],
//  providers:[ProductServiceService]
})
export class ProdDuplicatecomponentComponent implements OnInit {
ProductList;
greeting:string="hello";
   /*ProductList=[
    {PName:'Ipad', Manufacturer:'Apple',Price:23456.66,noOfLikes:0},
    {PName:'Ipod', Manufacturer:'Apple',Price:12356.66,noOfLikes:0},
    {PName:'Iphone', Manufacturer:'Apple',Price:22456.66,noOfLikes:0},
    {PName:'MotoG', Manufacturer:'Motorola',Price:21456.66,noOfLikes:0},
    {PName:'MotoX', Manufacturer:'Motorola',Price:33356.66,noOfLikes:0},
    {PName:'MotoE', Manufacturer:'Motorola',Price:24446.66,noOfLikes:0},
    {PName:'MotoZ', Manufacturer:'Motorola',Price:23236.66,noOfLikes:0},
    {PName:'Samsung', Manufacturer:'Samsung',Price:43566.66,noOfLikes:0} ];
*/
  constructor(private prodSer:ProductServiceService) { 

  }

  sayHello(){ return "Hello Peppa Pig";}

  ngOnInit() {
   this.ProductList= this.prodSer.getProduct();//this.heroCache.fetchCachedHero(this.heroId);
    console.log("this.ProductList"+ this.prodSer.getProduct());
 
  }

}
