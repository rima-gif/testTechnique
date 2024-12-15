import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{  MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';  
import { NgxPaginationModule } from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { EmployeeService } from './services/employee.service';


// const routes: Routes = [
//     { path: '', component: EmployeeListComponent },  // Définition des routes
//     
//   ];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeService 
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
