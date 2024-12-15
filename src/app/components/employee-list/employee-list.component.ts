import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'; // Correct chemin relatif vers le service
import  {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-employee-list',
  //imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = []; // Tableau pour stocker les employés
  pageSize: number = 10 ;
  currentPage: number = 1 ;
  totalEmployees: number = 0 ;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // Appel du service pour récupérer les employés
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        this.totalEmployees = data.length;
      }
    );
  }
  onPageChange(event:PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }


}
