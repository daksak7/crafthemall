import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from './content/product';
import { Subproduct } from './content/subproduct'
import { tap, catchError } from 'rxjs/operators'

@Injectable()
export class ProductService {
  apiUrl = "http://localhost:3000/data"

  constructor(private http: HttpClient) {

  }

  getProducts(product_id?): Observable<Product[]> {
    let newApiUrl = this.apiUrl
    if (product_id) {
      newApiUrl += "?product_id=" + product_id
    }
    return this.http.get<Product[]>(newApiUrl).pipe(
      // tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSubProducts(product_id): Observable<Subproduct[]> {
    let newApiUrl = this.apiUrl
    if (product_id) {
      newApiUrl += "?product_id=" + product_id
    }
    return this.http.get<Subproduct[]>(newApiUrl).pipe(
      
      // tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getUpperProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      // tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu: " + err.error.message
    } else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage)
  }
}
