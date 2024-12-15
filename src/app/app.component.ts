import { Component } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


@Component({
  selector: 'app-root',
  imports: [EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Changer de "styleUrl" à "styleUrls"
})
export class AppComponent {
  title = 'my-app';
}
