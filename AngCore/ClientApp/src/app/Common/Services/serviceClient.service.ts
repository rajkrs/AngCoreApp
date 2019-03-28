import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';


import { ServiceProviderConst } from '../Constants/ServiceProviderConst';
import { HttpErrorHandler, HandleError } from './HttpErrorHandler.Service';
import { get } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'dummy_token',
  })
};


@Injectable({providedIn: 'root'})
export class ServiceClient {

  private handleError: HandleError;
  private apiBaseUrl = ServiceProviderConst.baseUrl ;
  private sourceService: string;
    __proto__: any;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.sourceService = this.__proto__.constructor.__source;
    this.handleError = this.httpErrorHandler.createHandleError(this.sourceService);
  }


  get<T>(route, stack?: any): Observable<T> {
    var fullStack = this.sourceService + ' > ' + (stack != null ? stack + '()' : 'Default Get()');

    //console.log(fullStack);
    var stack1 = console.trace();
    //console.log(stack1.split('\n')[1]);

    console.log(this.get.caller);


    return this.http.get<T>(this.apiBaseUrl + route, httpOptions)
      .pipe(
        retry(3),
        tap((response: any) => {
          console.log(response);
        }),
        catchError(this.handleError(fullStack))
      );
  }


  post<T>(route, requestBody: any, stack?: any): Observable<T> {
    var fullStack = this.sourceService + ' > ' + (stack != null ? stack + '()' : 'Default Post()');
    console.log(fullStack);

    return this.http.post<T>(this.apiBaseUrl + route, requestBody, httpOptions)
      .pipe(
        retry(3),
        tap((response: any) => {
          console.log(response);
        }),
        catchError(this.handleError<T>(fullStack))
      );
  }


}


