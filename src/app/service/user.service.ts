import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { User } from '../model/user';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  onRegister(user:User) : Observable<User>{
    return this.http.post<User>("http://localhost:8089/api/v1.0/tweets/register",user);
  }
  allUser() {
    return this.http.get<User[]>("http://localhost:8089/api/v1.0/tweets/users/all");
  }
  findUser(userid:string) {
    return this.http.get<User>("http://localhost:8089/api/v1.0/tweets/user/search/"+userid);
  }
}
