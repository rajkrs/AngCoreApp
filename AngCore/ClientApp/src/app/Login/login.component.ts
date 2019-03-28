import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { LoginService } from './Login.Service';


@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public userLogin: any = { userName: '', password: '' };
  helplines: string[];
  userInfoRes: UserInfoRes;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.getHelpLine();
  }

  getHelpLine(): void {
    this.loginService.getHelpLine()
      .subscribe(response => this.helplines = response.data);
  }

  public login(userLogin: any): void {
    this.loginService.login(userLogin)
      .subscribe( data => {
        this.userInfoRes = data.data;
      });
  }

  
}

