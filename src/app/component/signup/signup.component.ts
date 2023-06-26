import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:any={};
signupForm:FormGroup;
errorMsg:any;

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit() {
  }
  connected(){
 this.usersService.signup(this.signup).subscribe((data)=>{
  console.log("Here data from BL", data.message);
 this.errorMsg= data.message;

 })
}
generatedId(T:any){
let max;
if (T.length==0) {
  max=0
}
else{
  max=T[0].id
}
for (let i = 0; i < T.length; i++) {
  if (T[i].id> max) {
    max= T[i].id;
  }
  
}
return max;
}
 
}
