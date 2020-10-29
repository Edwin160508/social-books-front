import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../autor/shared/autor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  api_ref: string = environment.API_URL;
  constructor(private httpClient:HttpClient) { }

  cadastrar(autor:Autor):Observable<Autor>{
    return this.httpClient.post<Autor>(`${this.api_ref}/api/autores`,autor);
  }
}
