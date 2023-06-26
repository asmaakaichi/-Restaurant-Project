import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  //Backend server Address
  chefURL:string="http://localhost:3000/chefs"
//httpClient: un livreur
  constructor(private httpClient:HttpClient) { }
  //Response: Array of objects
  getAllChefs(){
  return  this.httpClient.get<{chefArray:any}>(this.chefURL)
  }
  getChefById(id:any){
    return this.httpClient.get<{chef:any}>(`${this.chefURL}/${id}`);
  }
  //Response:Message/Boolean
  addChef(chefObj){
    return this.httpClient.post<{message:string}>(this.chefURL,chefObj);
  }
  //Response:Message/Boolean
  deleteChef(id){
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.chefURL}/${id}`);
  }
  editChef(newChef){
return this.httpClient.put<{isUpdated:boolean}>(this.chefURL, newChef)
  }
}
