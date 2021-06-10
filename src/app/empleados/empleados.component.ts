import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { JsonService } from "../json.service"
import { NgForm } from '@angular/forms';
import { CookieService } from "ngx-cookie-service"
import jsPDF from 'jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake"
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  public listaDisp:any;
  public postEdit:any;
  public isError = false
  colors = ['primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark','primary', 'secondary', 'success','info', 'danger', 'warning','dark'];
  private cookieValue: string="";
  public R1:any;
  rep:any;
  cRep=0;
  constructor(public json:JsonService, private router: Router,private cookieService: CookieService) { }
  //View child to take the pdfTable html to be esported as PDF later
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  //downloadAsPDF method used by the donload button to take the html and export it as a PDF this thanks to the htmlToPdfmake library
  public downloadAsPDF() {
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
  }

  //ngOnInit executes every time this view opens and pull the email information of the user logged in  required for the first report, this saves the info in the cookieValue variable 
  ngOnInit(): void {
    this.cookieValue=this.cookieService.get("login-info");
    this.json.getJson(2).subscribe((res:any) => {
      console.log(res);
      this.listaDisp=res;
    });
  }
  //onProfile used to take the report selected by the user and update the rep variable with the report with either a POST ot get as needed, this also trigers the cRep variable (current report) and change it to display the list and get ready the html to export as a PDF
  public onProfile(form: NgForm){
    if (form.valid) {
      if (form.value.report === "1"){
        this.R1={
          "Correo":this.cookieValue,
          "mes":form.value.date,
        }
        console.log(this.R1);
        this.json.postJson(5,this.R1).subscribe((res:any) => {
          console.log(res);
          this.rep=res;
          this.cRep=1;
        });
      }
      if (form.value.report === "2"){
        this.json.getJson(2).subscribe((res:any) => {
          console.log(res);
          this.rep=res;
          this.cRep=2;
        });
      }
      if (form.value.report === "3"){
        this.json.getJson(3).subscribe((res:any) => {
          console.log(res);
          this.rep=res;
          this.cRep=3;
        });
      }
       
          console.log(form.value)
    } else {
      this.onIsError();
    }
  }
  
  //method onIsError used to trigger the error message and timeout the same after displaying 


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

