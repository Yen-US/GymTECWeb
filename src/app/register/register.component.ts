import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { JsonService } from "../json.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//RegisterComponent allows the user to enter therequired information and then if teh informatin is valid, it sends a post to the API with the new users information
export class RegisterComponent {
  constructor(public json:JsonService, private router: Router, private location: Location) { 
  }
  public isError = false
  public OnInit(){}
//method on register get the user information and if valid send the information to the API with a POST
  public onRegister(form: NgForm){ 
    if (form.valid) {
      this.json.postJson(2,form.value).subscribe((res:any) => {
        console.log(res);
        if(res=="Empleado Agregado"){
          this.router.navigate(['/login']);
          this.isError = false;
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
