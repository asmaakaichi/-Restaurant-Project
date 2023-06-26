import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
@Input() chefInput:any;
  constructor() { }

  ngOnInit() {
  }
  experienceColor(x:any){
if (x>= 0  && x <=3) {
  return "orange";
} 
else if (x>=4 && x <=8) {
return "yellow";
}
else{
  return "red"
}

}
  }


