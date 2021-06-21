import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
//Serice to implement the Httplient to make calls to the API such as Get and Post
export class JsonService {
  apiPort="49220"
  header={headers:{'Access-Control-Allow-Origin':'http://localhost:4200','Access-Control-Allow-Methods': 'POST', "Access-Control-Allow-Headers": "Content-Type, Authorization"}}
  public ruta=0
  //URLs to connect definition
  urlVer='http://localhost:'+this.apiPort+'/api/login/Login_Empleados';//check
  urlReg='http://localhost:'+this.apiPort+'/api/login/Agregar_Empleados';
  
  urlEmp='http://localhost:'+this.apiPort+'/api/general/ConsultarEmpleadoCompleto';
  urlNEmp='http://localhost:'+this.apiPort+'/api/general/AgregarEmpleadoCompleto';
  
  urlNBranch='http://localhost:'+this.apiPort+'/api/general/AgregarSucursalCompleta';
  urlEBranch='http://localhost:'+this.apiPort+'/api/general/EditarSucursalCompleta'

  urlNTreat='http://localhost:'+this.apiPort+'/api/general/AgregarTratamiento';

  urlNPuesto='http://localhost:'+this.apiPort+'/api/general/AgregarPuesto';
  urlNPlanilla='http://localhost:'+this.apiPort+'/api/general/AgregarTipo_Planilla';
  urlNTEquipo='http://localhost:'+this.apiPort+'/api/general/AgregarTipo_Equipo';
  urlNServicio='http://localhost:'+this.apiPort+'/api/general/AgregarServicio';
  urlNMachine='http://localhost:'+this.apiPort+'/api/general/AgregarMaquina';
  urlNProd='http://localhost:'+this.apiPort+'/api/general/AgregarProducto';
  
  
  urlPlan='http://localhost:'+this.apiPort+'/api/general/Generar_Planilla';
  urlASuc='http://localhost:'+this.apiPort+'/api/general/ConsultarSucursalCompleta';
  urlATreat='http://localhost:'+this.apiPort+'/api/general/All_Tratamientos';
  urlAPuest='http://localhost:'+this.apiPort+'/api/general/All_Puestos';
  urlAPay='http://localhost:'+this.apiPort+'/api/general/All_Tipo_Planilla';
  urlTEquip='http://localhost:'+this.apiPort+'/api/general/All_Tipo_Equipo';
  urlServ='http://localhost:'+this.apiPort+'/api/general/All_Servicios';
  urlMach='http://localhost:'+this.apiPort+'/api/general/All_Maquinas';
  urlProd='http://localhost:'+this.apiPort+'/api/general/All_Productos';

  constructor(private http: HttpClient) { }
   //GetJson method implements .get of httpclient, just requires the route number
   getJson(ruta:number){
    if(ruta==1){
      return this.http.get(this.urlEmp,this.header)
    }if(ruta==2){
      return this.http.get(this.urlPlan,this.header)
    }if(ruta==3){
      return this.http.get(this.urlASuc,this.header)
    }if(ruta==4){
      return this.http.get(this.urlATreat,this.header)
    }if(ruta==5){
      return this.http.get(this.urlAPuest,this.header)
    }if(ruta==6){
      return this.http.get(this.urlAPay,this.header)
    }if(ruta==7){
      return this.http.get(this.urlTEquip,this.header)
    }if(ruta==8){
      return this.http.get(this.urlServ,this.header)
    }if(ruta==9){
      return this.http.get(this.urlMach,this.header)
    }if(ruta==10){
      return this.http.get(this.urlProd,this.header)
    }else{
      console.log(ruta)
      return this.http.get(this.urlEmp,this.header)
    }

      
  }
  //PostJson method implements .post of httpclient, just requires the route number and the objest to get posted in most cases a JSON
  postJson(ruta:number,obj:any){
    if(ruta==1){
      return this.http.post(this.urlVer,obj,this.header);
    }if(ruta==2){
      return this.http.post(this.urlReg,obj,this.header);
    }if(ruta==3){
      return this.http.post(this.urlNEmp,obj,this.header);
    }if(ruta==4){
      return this.http.post(this.urlNBranch,obj,this.header);
    }if(ruta==5){
      return this.http.post(this.urlNTreat,obj,this.header);
    }if(ruta==6){
      return this.http.post(this.urlNPuesto,obj,this.header);
    }if(ruta==7){
      return this.http.post(this.urlNPlanilla,obj,this.header);
    }if(ruta==8){
      return this.http.post(this.urlNTEquipo,obj,this.header);
    }if(ruta==9){
      return this.http.post(this.urlNServicio,obj,this.header);
    }if(ruta==10){
      return this.http.post(this.urlNMachine,obj,this.header);
    }if(ruta==11){
      return this.http.post(this.urlNProd,obj,this.header);
    }if(ruta==12){
      return this.http.post(this.urlEBranch,obj,this.header);
    }
    else{
      return this.http.post(this.urlVer,obj,this.header);
    }
}
}