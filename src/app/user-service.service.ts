import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServiceService {

  //uncomented only for testing purpose 
  // createUser(data: any) {
  //   //Log user data in console
  //   console.warn("User Name: " + data);
  // }

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/new-user';
  }

  public findAll(){
    return this.http.get(this.usersUrl);
  }

  public save(data:any) {
    return this.http.post(this.usersUrl, data);
  }

}
