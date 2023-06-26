import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
platsTab:any=[];
  constructor(private platService:PlatService) { }

  ngOnInit() {
   this.platService.getAllPlats().subscribe((data)=>{
    this.platsTab=data.platsArray;
   });
  }

}
