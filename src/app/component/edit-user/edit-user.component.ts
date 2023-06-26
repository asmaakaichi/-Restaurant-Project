import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
signupForm:FormGroup;
id:any;
signup:any={};
  constructor(private usersService:UsersService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.usersService.getUserById(this.id).subscribe((data)=>{
console.log("Here user from BL", data);
this.signup=data.user;
})
  }
  editProfile(){
this.usersService.editUser(this.signup).subscribe((data)=>{
  console.log("Here obj after edit", data);
  this.router.navigate(["admin"]);
})
  }
}
