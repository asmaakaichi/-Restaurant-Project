import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userURL:string="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }
  //Response: Array of objects
  getAllUsers(){
    return  this.httpClient.get<{usersArray:any}>(this.userURL)
    }
  getUserById(id:any){
      return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`);
    }
    //Response:Message/Boolean
  signup(userObj){
      return this.httpClient.post<{message:string}>(this.userURL+ "/signup",userObj);
    }
  login(userObj){
      return this.httpClient.post<{isLoggedIn:boolean}>(this.userURL+ "/login", userObj) 
    };
    //Response:Message/Boolean
  deleteUser(id){
      return this.httpClient.delete<{isDeleted:boolean}>(`${this.userURL}/${id}`);
    }
  editUser(newUser){
  return this.httpClient.put<{isUpdated:boolean}>(this.userURL, newUser)
    }
}
