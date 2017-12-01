import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users:any;

  constructor(private _dataService :DataFetchService ) { 

  this._dataService.getUsers().subscribe(res=>this.users=res)
    
  }
}
