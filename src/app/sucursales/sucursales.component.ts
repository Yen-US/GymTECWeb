import { Component, OnInit } from '@angular/core';
import { JsonService } from "../json.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})

export class SucursalesComponent implements OnInit {
  public listaDisp:any;
  public postEdit:any;
  constructor(public json:JsonService, private router: Router) { }
  public isError = false
  colors = ['primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark'];
  //ngOnInit meths, execute always at the beggining when you access this view allows to get the list of devices from the API and assign the same to the listaDisp variable so then can be pulled by the HTML in a for
  ngOnInit(): void {
    this.json.getJson(2).subscribe((res:any) => {
      console.log(res);
      this.listaDisp=res;
    });
  }
//onNew mthod required for the new device card to add new devices, the same passes an NgForm with the informatinon typed by the user and then make the post the API and refresh the page
  public onNew(form: NgForm){
    if (form.valid) {
      this.json.postJson(2,form.value).subscribe((res:any) => {
        console.log(res);
        if(res=="El dispositivo se ha agregado exitosamente"){
          this.isError = false;
          window.location.reload();
        }else{
          this.isError = true;
        }
      });
          console.log(form.value)
    } else {
      this.onIsError();
    }
  }
  //OnEdit methodd required by the edit info card to edit the information of the existent devices, before it passes the information verify that the field is not empty and if not replaces the device onformation and then make the post to the API
  public onEdit(form: NgForm, disp:any){
    if (form.valid) {
      if(form.value.Marca!=""){
        disp.Marca=form.value.Marca
      }if(form.value.Consumo_Electrico!=""){
        disp.Consumo_Electrico=form.value.Consumo_Electrico
      }if(form.value.Aposento!=""){
        disp.Aposento=form.value.Aposento
      }if(form.value.Tiempo_Garantia!=""||form.value.Tiempo_Garantia!=0){
        disp.Tiempo_Garantia=form.value.Tiempo_Garantia
      }if(form.value.Nombre!=""){
        disp.Nombre=form.value.Nombre
      }if(form.value.Decripcion!=""){
        disp.Decripcion=form.value.Decripcion
      }
      console.log(disp)
      this.json.postJson(3,disp).subscribe((res:any) => {
        console.log(res);
        if(res=="El dispositivo ha sido actualizado "){
          this.isError = false;
          window.location.reload();
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
