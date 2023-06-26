import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.css']
})
export class ChefInfoComponent implements OnInit {
id:any;
chefs:any=[];
chef:any;
  constructor(private activatedRoute:ActivatedRoute, private chefService:ChefService) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get("id")
    this.chefService.getChefById(this.id).subscribe((data)=>{
      console.log("Here chef from BL", data);
      this.chef=data.chef;
    })
  }

}
