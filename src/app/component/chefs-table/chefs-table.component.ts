import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefs-table',
  templateUrl: './chefs-table.component.html',
  styleUrls: ['./chefs-table.component.css']
})
export class ChefsTableComponent implements OnInit {
chefs:any=[];
  

  constructor(private router:Router, private chefService:ChefService) { }

  ngOnInit() {
    this.chefService.getAllChefs().subscribe((data)=>{
    this.chefs=data.chefArray;
     })   
  }
  
displayChef(id:any){

this.router.navigate([`chefInfo/${id}`]);
  }
goToEdit(id:any){
this.router.navigate([`editChef/${id}`])
}
deleteChef(id){
this.chefService.deleteChef(id).subscribe((data)=>{
  console.log("Here response from BL", data.isDeleted);
  this.chefService.getAllChefs().subscribe((data)=>{
    this.chefs=data.chefArray;
  })
  });
  }

}
