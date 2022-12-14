import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TccService {

  url = '';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<any>{
    return this.httpClient.get(this.url);
  }

}
