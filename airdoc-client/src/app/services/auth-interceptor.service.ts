import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';
const USER_TYPE_HEADER_KEY = 'User-Type';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    const userType = this.token.getUserType();
    let headers = req.headers;
    if (token != null) {
    // console.log("auth-token", token);
      //authReq = authReq.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
      headers = headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token);
    }

    if (userType != null) {
      console.log("userType", userType);

      //authReq = authReq.clone({ headers: req.headers.set(USER_TYPE_HEADER_KEY, userType)});
      headers = headers.set(USER_TYPE_HEADER_KEY, userType);
    }
    authReq = req.clone({headers: headers});
    // console.log("headers : " + JSON.stringify(headers));
    // console.log("authReq : " + JSON.stringify(authReq));
    return next.handle(authReq);
  }
}