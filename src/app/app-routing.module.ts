import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { AddPlatComponent } from './component/add-plat/add-plat.component';
import { AddChefComponent } from './component/add-chef/add-chef.component';
import { ChefsComponent } from './component/chefs/chefs.component';
import { MenuComponent } from './component/menu/menu.component';
import { PlatsComponent } from './component/plats/plats.component';
import { AdminComponent } from './component/admin/admin.component';
import { ChefInfoComponent } from './component/chef-info/chef-info.component';

import { EditPlatComponent } from './component/edit-plat/edit-plat.component';
import { PlatInfoComponent } from './component/plat-info/plat-info.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditChefComponent } from './component/edit-chef/edit-chef.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"addPlat", component:AddPlatComponent},
  {path:"addChef", component:AddChefComponent},
  {path:"chefs", component:ChefsComponent},
  {path:"menu", component:MenuComponent},
  {path:"plat", component:PlatsComponent},
  {path:"admin", component:AdminComponent},
  {path:"chefInfo/:id", component:ChefInfoComponent},
  {path:"platInfo/:id", component:PlatInfoComponent},
  {path:"userInfo/:id", component:UserInfoComponent},
  {path:"editPlat/:id", component:EditPlatComponent},
  {path:"editChef/:id", component:EditChefComponent},
  {path:"editProfile/:id", component:EditUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
