import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { JsonService } from "../json.service"
import { CookieService } from "ngx-cookie-service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//LoginComonent the user gets routed directly to this view when accessing the admin view, it allows the user to login and saves the information in a "login-info" cookie for further reference 
export class LoginComponent implements OnInit {

  private cookieValue: string="";
  constructor(public json:JsonService, private router: Router, private location: Location,private cookieService: CookieService) { 
  }
  
  public isError = false
//ngOnInit method execute always at the beggining when you execute this component, and creates the cookes above mentioned then the info is added
  public ngOnInit(){
    this.cookieService.set("login-info","");
  }
  
//onLogin method verify if the info is valid and then make the post to the API, adependeing on the response of the same, routes the admin to the dash view or send an error message, also if te user log in successfully sets the cookie to the email value 
public onLogin(form: NgForm){
    if (form.valid) {
      this.json.postJson(1,form.value).subscribe((res:any) => {
        console.log(res);
        if(res=="Correcto"){
          this.router.navigate(['/eshop']);
          this.isError = false;
          this.cookieService.set("login-info",form.value.Correo);
        }else{
          this.isError = true;
        }
      }); 
          console.log(form.value)
    } else {
      this.onIsError();
    }
  }
  
  //method onIsError used to trigger the error message and timeout the same after displaying 
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
