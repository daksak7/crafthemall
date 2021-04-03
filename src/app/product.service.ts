import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { Product } from './content/product';
import {tap,catchError} from 'rxjs/operators'

@Injectable()
export class ProductService {
  apiUrl = "http://localhost:3000/data"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      // tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata oluştu: "+err.error.message 
    }else{
      errorMessage='Sistemsel bir hata'
    }
    return throwError(errorMessage)
  }
}
