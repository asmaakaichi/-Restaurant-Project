import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any={};
loginForm:FormGroup;
errorMsg:string;
  constructor( private router:Router, private usersService:UsersService) { }

  ngOnInit() {
  }
  signin(){
    this.usersService.login(this.login).subscribe((data)=>{
console.log("Here data after login", data.isLoggedIn);
if (data.isLoggedIn) {
  this.router.navigate([""]);
}
else{
  this.errorMsg="Please check email/pwd"
}
    })
  
 
}
}
