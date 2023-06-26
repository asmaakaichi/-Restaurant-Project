import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
path: string="assets/img/logo.png";
home:string="Home";
about:string="About";
menu:string="Menu";
  constructor() { }

  ngOnInit() {
  }

}
