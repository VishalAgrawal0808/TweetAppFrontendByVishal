import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = 'https://fsetweetappbackend.azurewebsites.net/api/v1.0/tweets';
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get("https://fsetweetappbackend.azurewebsites.net/api/v1.0/tweets/users/all");
  }
  loginUser(user: Login){
    return this.http.get("https://fsetweetappbackend.azurewebsites.net/api/v1.0/tweets/login?emailId="+user.emailId+"&password="+user.password,{responseType: 'text'});
  }
  forgotPassword(user:Login){
    return this.http.get("https://fsetweetappbackend.azurewebsites.net/api/v1.0/tweets/forgot?userName="+user.emailId+"&password="+user.password,{responseType: 'text'});
  }
  registserUser(user: Users){
    return this.http.post<any>("https://fsetweetappbackend.azurewebsites.net/api/v1.0/tweets/register",user);
  }
  
}
