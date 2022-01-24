import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropDown } from '../../interfaces/dropdown';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {
  public httpClient: HttpClient;
  public baseUrl: string
  constructor(httpClient: HttpClient,@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
  }
  GetType(): Observable<DropDown[]> {
    return this.httpClient.get<DropDown[]>(this.baseUrl + 'InvoiceValidation/GetType');
  }
}
