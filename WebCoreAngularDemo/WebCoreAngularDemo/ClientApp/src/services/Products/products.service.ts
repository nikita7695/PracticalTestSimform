import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category';
import { DropDown } from '../../interfaces/dropdown';
import { Products } from '../../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public httpClient: HttpClient;
  public baseUrl: string
  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
  }
  public GetProductList(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.baseUrl + 'api/Product/get-all-product');
  }
  public GetProductById(productID): Observable<Products> {
    //const headers = new HttpHeaders().set('Authorization', this.userAccessToken);
    const parameters = new HttpParams().set('productID', productID);
    const options = {
      //headers: headers,
      params: parameters
    };
    return this.httpClient.get<Products>(this.baseUrl + 'api/Product/get-product', options);
  }
  public GetCategoryList(): Observable<DropDown[]> {
    return this.httpClient.get<DropDown[]>(this.baseUrl + 'api/Product/get-all-category');
  }
  public SaveProduct(model: Products): Observable<Products> {
    //const headers = new HttpHeaders().set('Authorization', this.userAccessToken);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers
    };
    return this.httpClient.post<Products>(this.baseUrl + 'api/Product/save', model, options).pipe(map(response => response));;
  }
  public DeleteProduct(productID): Observable<Products> {
    //const headers = new HttpHeaders().set('Authorization', this.userAccessToken);
    const parameters = new HttpParams().set('productId', productID);
    const options = {
      //headers: headers,
      params: parameters
    };
    return this.httpClient.get<Products>(this.baseUrl + 'api/Product/delete-product', options);
  }


}
