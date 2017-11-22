import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products = [
    
{productno:111,productname:'IPhone',price:'Rs. 45000'},
    {productno:121,productname:'IPad',price:'Rs. 34500'},
    {productno:131,productname:'IPod',price:'Rs. 32222'},
    {productno:141,productname:'Moto G',price:'Rs. 35678'},
    {productno:151,productname:'Moto X',price:'Rs. 43434'},
    {productno:161,productname:'Moto E',price:'Rs. 67676'},
    {productno:171,productname:'Moto Z',price:'Rs. 23123'},
    {productno:181,productname:'Samsung Note 3',price:'Rs. 43211'},
    {productno:191,productname:'Samsung Note 4',price:'Rs. 76433'},
    {productno:201,productname:'Samsung Note 5',price:'Rs. 37890'}
  
];

}
