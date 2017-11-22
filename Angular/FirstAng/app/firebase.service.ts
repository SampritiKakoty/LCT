import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable()
export class FirebaseService {

  empPath="https://myangularproject-49e63.firebaseio.com/Employees.json"

  constructor(private http:Http) { }

  getEmpDetails(){
    return this.http.get(this.empPath).map((response:Response)=>response.json())
  }

}
