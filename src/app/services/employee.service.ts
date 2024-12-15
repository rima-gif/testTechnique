import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; // Pour gérer les erreurs

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://retoolapi.dev/HYd96h/data'; // L'URL de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les employés depuis l'API
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
      
    
  }
}
