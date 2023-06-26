import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {
editChefForm:FormGroup;
chef:any={};
id:any;
constructor(private chefService:ChefService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
this.editChefForm=this.formBuilder.group({
name:[""],
speciality:[""],
experience:[""]
});
this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.chefService.getChefById(this.id).subscribe((data)=>{
this.chef=data.chef;
})
  }
editChef(){
this.chefService.editChef(this.chef).subscribe((data)=>{
  console.log("Here data after edit", data);
  this.router.navigate(["admin"]);
})
}
}
