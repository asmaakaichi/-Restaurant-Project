import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css']
})
export class PlatInfoComponent implements OnInit {
id:any;
plats:any=[];
plat:any;
  constructor(private platService:PlatService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.platService.getPlatById(this.id).subscribe((data)=>{
      console.log("Here plat from BL", data);
      this.plat=data.plat;
    });
  }

}
