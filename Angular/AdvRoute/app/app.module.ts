import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ProdServiceService} from './prod-service.service';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdDetailComponentComponent } from './prod-detail-component/prod-detail-component.component';
import { EmpModelFormComponent } from './emp-model-form/emp-model-form.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProdDetailComponentComponent,
    EmpModelFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component : HomeComponent},
    // separate area {path: 'product',component: ProductComponent},     
      {path: 'employee',component: EmployeeComponent},
      {path: 'employeeModelForm',component: EmpModelFormComponent},
    // separate area  {path: 'product/:prodNo',component: ProdDetailComponentComponent},
    {path: 'product',
    component: ProductComponent,
    children:[{path:':prodNo',component:ProdDetailComponentComponent}]}, 
    {path: '**',component: PageNotFoundComponent},
     
    ]) , 
    FormsModule,ReactiveFormsModule
  ],
  providers: [ProdServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
