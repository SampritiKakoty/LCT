import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeServiceService {

  //employee[];
  empPath:string="../assets/Employee-data.json";

  constructor(private http:Http) { }

  //ngOnInit(): void {
 // this.http.get('/Employee-data.json')

 // }
 getEmp(){
   //console.log("ssssssssssssss");
   return this.http.get(this.empPath).map((response:Response)=>response.json());
 }

}
