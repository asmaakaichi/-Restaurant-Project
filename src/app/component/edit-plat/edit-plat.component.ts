import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
  plats: any = [];

  id: any;
  editPlatForm: FormGroup;
  plat:any= {};
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private platService: PlatService, private router: Router) { }

  ngOnInit() {
    this.editPlatForm = this.formBuilder.group({
      name: [""],
      price: [""],
      description: [""]
    })
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    
    this.platService.getPlatById(this.id).subscribe((data) => {
      console.log("dataaaaa", data);
      
      this.plat = data.plat
    })
  }
  editPlat() {
    this.platService.editPlat(this.plat).subscribe((data) => {
      console.log("Here data after edit", data);
      this.router.navigate(["admin"]);
    });
  }
}
