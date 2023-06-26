import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
 //Backend server Address
 platURL:string="http://localhost:3000/plats"
 //httpClient: un livreur
  constructor(private httpClient:HttpClient) { }
  //Response: Array of objects
  getAllPlats(){
    return  this.httpClient.get<{platsArray:any}>(this.platURL)
    }
  getPlatById(id:any){
      return this.httpClient.get<{plat:any}>(`${this.platURL}/${id}`);
    }
    //Response:Message/Boolean
  addPlat(platObj){
      return this.httpClient.post<{message:string}>(this.platURL,platObj);
    }
    //Response:Message/Boolean
  deletePlat(id){
      return this.httpClient.delete<{isDeleted:boolean}>(`${this.platURL}/${id}`);
    }
  editPlat(newPlat){
  return this.httpClient.put<{isUpdated:boolean}>(this.platURL, newPlat)
    }
}
