import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats-table',
  templateUrl: './plats-table.component.html',
  styleUrls: ['./plats-table.component.css']
})
export class PlatsTableComponent implements OnInit {
plats:any=[]
  constructor(private router:Router, private platService:PlatService) { }

  ngOnInit() {
   this.platService.getAllPlats().subscribe((data)=>{
    this.plats=data.platsArray;
   })
  }
  displayPlat(id:any){
   this.router.navigate([`platInfo/${id}`]);
  }
  goToEdit(id:any){
//alert("edit" + id)
this.router.navigate([`editPlat/${id}`]);
  }
deletePlat(id){
this.platService.deletePlat(id).subscribe((data)=>{
  console.log("Here response from BL", data.isDeleted);
  this.platService.getAllPlats().subscribe((data)=>{
    this.plats=data.platsArray;
  })
});

  }

}
