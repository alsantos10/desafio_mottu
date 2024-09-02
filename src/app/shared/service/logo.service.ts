import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_API = './api/images/logo.svg';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  constructor(private http: HttpClient) {}
  
  getLogo(): Observable<string> {
    return this.http.get<string>(URL_API);
  }

}
