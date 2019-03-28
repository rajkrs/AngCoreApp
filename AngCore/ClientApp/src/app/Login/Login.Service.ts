import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


import { ApiResponse } from '../Common/Models/ApiResponse';
import { ServiceClient } from '../common/services/ServiceClient.service';


@Injectable()
export class LoginService {

  private serviceRoute = 'login/';
  constructor(private client: ServiceClient) {
  }


  getHelpLine(){
    return this.client.get<ApiResponse<string[]>>(this.serviceRoute + "helpline");
  }

  login(loginReq: LoginReq): Observable<ApiResponse<UserInfoRes>> {
    return this.client.post<ApiResponse<UserInfoRes>>(this.serviceRoute, loginReq);
  }





  //getHelpLine(): Observable<ApiResponse<string[]>>{
  //  return this.http.get<ApiResponse<string[]>>(this.apiUrl + "helpline")
  //    .pipe(
  //      catchError(this.handleError<ApiResponse<string[]>>('addHero'))
  //    );
  //}


  


  /** GET: Get all Users from API */
  //getUsers(): Observable<User[]> {
  //  return this.http.get<User[]>(this.apiUrl + "company")
  //    .pipe(
  //      tap((usr: string[]) => {
  //        this.log('fetched users');
  //      }
  //      ),
  //      map(user => user.map(udata => {
  //        return { userName: udata, id: null };
  //      })),
  //      catchError(this.handleError('getUsers', []))
  //    );
  //}










}



