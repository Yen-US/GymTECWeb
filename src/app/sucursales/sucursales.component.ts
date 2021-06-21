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
  public listaSuc:any;
  public listaTreat:any;
  public postEdit:any;
  public edit:any;
  constructor(public json:JsonService, private router: Router) { }
  public isError = false
  colors = ['primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark'];
  //ngOnInit meths, execute always at the beggining when you access this view allows to get the list of devices from the API and assign the same to the listaSuc variable so then can be pulled by the HTML in a for
  ngOnInit(): void {
    this.json.getJson(3).subscribe((res:any) => {
      console.log(res);
      this.listaSuc=res;
    });
  }
//onNew mthod required for the new device card to add new devices, the same passes an NgForm with the informatinon typed by the user and then make the post the API and refresh the page
  public onNew(form: NgForm){
    if (form.valid) {
      console.log(form.value)
      this.json.postJson(4,form.value).subscribe((res:any) => {
        console.log(res);
        if(res=="La sucursal se ha agregado exitosamente"){
          this.isError = false;
          window.location.reload();
        }else{
          window.location.reload();
        }
      });
    } else {
      this.onIsError();
    }
  }

  public onTreat(){
    this.json.getJson(4).subscribe((res:any) => {
      console.log(res);
      this.listaTreat=res;
    });
  }

  //onNew mthod required for the new device card to add new devices, the same passes an NgForm with the informatinon typed by the user and then make the post the API and refresh the page
  public onNewTreat(form: NgForm){
    if (form.valid) {
      console.log(form.value)
      this.json.postJson(5,form.value).subscribe((res:any) => {
        console.log(res);
        if(res=="El tratamiento se ha agregado exitosamente"){
          this.isError = false;
          window.location.reload();
        }else{
          
        }
      });
    } else {
      this.onIsError();
    }
  }
  //OnEdit methodd required by the edit info card to edit the information of the existent devices, before it passes the information verify that the field is not empty and if not replaces the device onformation and then make the post to the API
  public onEdit(form: NgForm, suc:any){
    if (form.valid) {
      console.log(suc)

      suc.Canton = form.value.Canton;
      suc.Clase = "";
      suc.Distrito = form.value.Distrito;
      suc.Empleado = form.value.Empleado;
      suc.Fecha_apertura = form.value.Fecha_apertura;
      suc.Max_capacidad = form.value.Max_capacidad;
      suc.Nombre = form.value.Nombre;
      suc.Numeros_sucursal = form.value.Numero;
      suc.Provincia = form.value.Provincia;
      suc.Servicio = "";
      console.log(suc)
      this.json.postJson(12,suc).subscribe((res:any) => {
        console.log(res);
        if(res=="La sucursal se ha editado exitosamente"){
          this.isError = false;
          window.location.reload();
        }else{
          
          window.location.reload();
        }
      });
    } else {
      this.onIsError();
          

    }
  }
  
  //method onIsError used to trigger the error message and timeout the same after displaying 
  onIsError(): void {
    
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
