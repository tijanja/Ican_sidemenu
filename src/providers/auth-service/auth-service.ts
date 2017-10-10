import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

let apiUrl = 'http://104.198.10.84/api/';

@Injectable()
export class AuthService {
  remoteCall:Observable<any>;
  constructor(public http: Http) {}

  login(credentials)
  {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.remoteCall = this.http.post(apiUrl, JSON.stringify(credentials), {headers: headers});
      //this.remoteCall = this.http.post(apiUrl, JSON.stringify(credentials));
      this.remoteCall.subscribe(data =>
        {
          resolve(data);
          console.log('my data: ', data);
        },
        (err) =>
        {
          reject(err);
        });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('X-Auth-Token', localStorage.getItem('token'));

      this.http.post(apiUrl+'logout', {}, {headers: headers})
        .subscribe(res => {
          localStorage.clear();
        }, (err) => {
          reject(err);
        });
    });
  }

}
