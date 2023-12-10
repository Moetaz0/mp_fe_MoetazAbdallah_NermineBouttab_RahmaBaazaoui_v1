import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reglement } from './reglement';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  constructor(private httpClient: HttpClient) { }
  
   getAll(): Observable<any> {
    const url = "http://localhost:8080/gr/reglement/getAll";
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.httpClient.get<Reglement[]>(url, { headers })
    .pipe(
      catchError((error) => {
        console.error('Error in getAllJSON:', error);
        return throwError(error);
      })
    );
}
    
    
    create(reg:Reglement): Observable<any> {
    
    return this.httpClient.post("http://localhost:8080/gr/reglement/add",reg)
    }
    
    find(id:object): Observable<any> {
    
    return this.httpClient.get("http://localhost:8080/gr/reglement/get/" +id)
    }
    
    update(id:object, reg:Reglement): Observable<any> {
    
    return this.httpClient.put("http://localhost:8080/gr/reglement/update/" + id, reg)
    }
    
    delete(id:object){
    return this.httpClient.delete("http://localhost:8080/gr/reglement/delete/"+ id)
    }
    }

