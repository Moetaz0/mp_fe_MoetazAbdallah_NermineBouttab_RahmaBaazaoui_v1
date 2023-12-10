import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ReglementFacture } from './reglement-facture';

@Injectable({
  providedIn: 'root'
})
export class ReglementFactureService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    const url = "http://localhost:8080/gr/reglementFacture/getAll";
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.httpClient.get<ReglementFacture[]>(url, { headers })
    .pipe(
      catchError((error) => {
        console.error('Error in getAllJSON:', error);
        return throwError(error);
      })
    );
}
    
    
    create(reg:ReglementFacture): Observable<any> {
    
    return this.httpClient.post("http://localhost:8080/gr/reglementFacture/add",reg)
    }
    
    find(id:object): Observable<any> {
    
    return this.httpClient.get("http://localhost:8080/gr/reglementFacture/get" +id)
    }
    
  
}
