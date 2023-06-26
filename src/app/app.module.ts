import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ChefsComponent } from './component/chefs/chefs.component';
import { PlatsComponent } from './component/plats/plats.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { HistoryComponent } from './component/history/history.component';
import { VideoComponent } from './component/video/video.component';
import { MenuComponent } from './component/menu/menu.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { TestmonialsComponent } from './component/testmonials/testmonials.component';
import { NewsComponent } from './component/news/news.component';
import { AddPlatComponent } from './component/add-plat/add-plat.component';
import { AddChefComponent } from './component/add-chef/add-chef.component';
import { AdminComponent } from './component/admin/admin.component';
import { ChefsTableComponent } from './component/chefs-table/chefs-table.component';
import { PlatsTableComponent } from './component/plats-table/plats-table.component';
import { ChefComponent } from './component/chef/chef.component';
import { PlatComponent } from './component/plat/plat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersTableComponent } from './component/users-table/users-table.component';
import { ChefInfoComponent } from './component/chef-info/chef-info.component';
import { PlatInfoComponent } from './component/plat-info/plat-info.component';
import { EditPlatComponent } from './component/edit-plat/edit-plat.component';
import {  HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditChefComponent } from './component/edit-chef/edit-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChefsComponent,
    PlatsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    HistoryComponent,
    VideoComponent,
    MenuComponent,
    ReservationComponent,
    TestmonialsComponent,
    NewsComponent,
    AddPlatComponent,
    AddChefComponent,
    AdminComponent,
    ChefsTableComponent,
    PlatsTableComponent,
    ChefComponent,
    PlatComponent,
    UsersTableComponent,
    ChefInfoComponent,
    PlatInfoComponent,
    EditPlatComponent,
    UserInfoComponent,
    EditUserComponent,
    EditChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
