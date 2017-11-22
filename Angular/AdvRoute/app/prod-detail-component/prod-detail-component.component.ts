import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
import {ProdServiceService} from '../prod-service.service';


@Component({
  selector: 'app-prod-detail-component',
  templateUrl: './prod-detail-component.component.html',
  styleUrls: ['./prod-detail-component.component.css']
})
export class ProdDetailComponentComponent implements OnInit {

 prodNo:any;
 product:any;

  constructor(private route: ActivatedRoute, private prodDetail:ProdServiceService) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params =>
      {
        this.prodNo=params['prodNo'];
        this.product=this.prodDetail.getProductByProdNo(this.prodNo);
      }
    
    
    )
  }

}



    
   
