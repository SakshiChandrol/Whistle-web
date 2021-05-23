import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  onLogin(login:Login) : Observable<any>{
    return this.http.post<Login>("http://localhost:8090/api/v1.0/tweets/login",login);
  }
  onForget(userid:string, pwd:string) {
    return this.http.put<string>("http://localhost:8090/api/v1.0/tweets/"+userid+"/forget",pwd);
  }
  
}
