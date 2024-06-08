import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetClientService {

  constructor(public http: HttpClient) { }

  getJSON(url: string) {
    return this.http.get(url);
  }

  getClient(url: string) {
    return this.http.get(url);
  }

  order(url: string, body: any) {
    return this.http.post(url, body).toPromise();
  }

  lastInvoice(url: string) {
    return this.http.get(url);
  }
  
}
