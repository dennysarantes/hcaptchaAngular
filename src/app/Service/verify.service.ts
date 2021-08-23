import { HttpClient, HttpParams } from '@angular/common/http';
import { Payload } from './../Model/payload';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  token! : string;
  url : string = 'https://hcaptcha.com/siteverify';
  payloadResponse! : Payload;

  constructor(private httpClient : HttpClient){}


  verificaToken(token : string) {
    const SECRET_KEY = '0x0405E4e0E4a293f1c04a8C1935478d3B9B19da93';

    const body = new HttpParams()
          .set('secret',SECRET_KEY)
          .set('response', token)
          .set('remoteip', '127.0.0.1')

    return this.httpClient.post(this.url, body)
  }
}
