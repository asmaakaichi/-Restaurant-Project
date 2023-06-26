import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
usersResto:any=[]
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data)=>{
      this.usersResto=data.usersArray;
    });
  }
  goToDisplay(id:any){
this.router.navigate([`userInfo/${id}`]);
  }
  goToEdit(id:any){
    this.router.navigate([`editProfile/${id}`]);
  }
  delete(id:any){
  this.userService.deleteUser(id).subscribe((data)=>{
  console.log("Here res from BL", data.isDeleted);
  this.userService.getAllUsers().subscribe((data)=>{
    this.usersResto=data.usersArray;
  })
  })
  }
}
