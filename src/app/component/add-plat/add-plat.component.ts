import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { generatedId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  addPlatForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router, private platService:PlatService) { }

  ngOnInit() {
    this. addPlatForm= this.formBuilder.group({
      name:[""],
      price:[""],
      description:[""],

    })
  }
addPlat(){
this.platService.addPlat(this.addPlatForm.value).subscribe((data)=>{
console.log("Here data from BL", data.message);
this.router.navigate(["admin"])
});

  }
}
