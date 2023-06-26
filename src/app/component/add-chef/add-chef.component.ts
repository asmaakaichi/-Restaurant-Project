import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';
import { generatedId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  addChefForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router, private chefService:ChefService) { }

  ngOnInit() {
    this.addChefForm= this.formBuilder.group({
      name:[""],
      speciality:[""],
      experience:[""],
    })
    }
  addChef (){
console.log("here chef object", this.addChefForm.value);
this.chefService.addChef(this.addChefForm.value).subscribe((data)=>{
console.log("Here data from BL", data.message);
this.router.navigate(['admin']);
})

  }
 
}
