import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ErrorComponent
  ],
  exports:[
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [

    CommonModule,
    RouterModule
  ]
})
export class ComponentesModule { }
