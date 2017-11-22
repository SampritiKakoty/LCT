import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { ProductComponent } from './product/product.component';
import { CompoFor16NovComponent } from './compo-for16-nov/compo-for16-nov.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { GenderpipePipe } from './genderpipe.pipe';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ProdDuplicatecomponentComponent } from './prod-duplicatecomponent/prod-duplicatecomponent.component';
import {ProductServiceService} from './product-service.service';
import {EmployeeServiceService} from './employee-service.service';
import {FirebaseService} from './firebase.service';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { FirebaseComponent } from './firebase/firebase.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    ProductComponent,
    c
    CompoFor16NovComponent,
    PipedemoComponent,
    GenderpipePipe,
    ParentcomponentComponent,
    ChildcomponentComponent,
    ProdDuplicatecomponentComponent,
    EmployeeComponentComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [ProductServiceService,EmployeeServiceService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
