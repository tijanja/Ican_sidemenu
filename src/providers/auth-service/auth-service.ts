import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

let apiUrl = 'http://34.241.5.192/api/';

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
          let a = data.json();
          resolve(a.data);

          //console.log(data);
        },
        (err) =>
        {
          console.log(err);
          reject(err);
        });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
        .subscribe((res) => {
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

  getQuestion(memberid)
  {
    return new Promise((resolve, reject)=>{

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.remoteCall= this.http.post(apiUrl,JSON.stringify(memberid),{headers: headers});
      this.remoteCall.subscribe((data)=>{
        //console.log(data);
          resolve(data.json());
      },
        (err)=>{
          reject(err);
        });

    });
  }

  uploadAnswer(answers)
  {
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.remoteCall= this.http.post(apiUrl,JSON.stringify(answers),{headers: headers});

      this.remoteCall.subscribe(
        (data)=>
        {
          resolve(data.json())
        },
        (err)=>
        {
          reject(err)
        });

    });
  }
}
