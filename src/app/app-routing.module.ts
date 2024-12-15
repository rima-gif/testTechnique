import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component'; 

const routes: Routes = [
  { path: '', component: EmployeeListComponent },  // Définir la route principale
  // Vous pouvez ajouter d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Charger les routes avec RouterModule
  exports: [RouterModule]  // Exporter le module pour l'utiliser dans l'application
})
export class AppRoutingModule { }
