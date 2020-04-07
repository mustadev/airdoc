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
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }

    if (userType != null) {
      authReq = req.clone({ headers: req.headers.set(USER_TYPE_HEADER_KEY, userType)});
    }
    console.log("authReq : " + JSON.stringify(authReq));
    return next.handle(authReq);
  }
}