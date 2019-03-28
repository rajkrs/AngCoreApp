import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ServiceProviderConst } from '../Common/Constants/ServiceProviderConst';


@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = ServiceProviderConst.baseUrl + 'user/';

  constructor(private http: HttpClient) { }

   

  /** GET: Get all Users from API */
  getUserInfo(): Observable<UserInfoRes> {
    return this.http.get<UserInfoRes>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched helpline')),
        catchError(this.handleError<UserInfoRes>('getHelpLine'))
      );
  }
  




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  private log(message: string) {
    console.log(`Service: ${message}`);
  }

}



