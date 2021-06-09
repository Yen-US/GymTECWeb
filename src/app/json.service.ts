import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
//Serice to implement the Httplient to make calls to the API such as Get and Post
export class JsonService {
  apiPort="49429"
  header={headers:{'Access-Control-Allow-Origin':'http://localhost:4200','Access-Control-Allow-Methods': 'POST', "Access-Control-Allow-Headers": "Content-Type, Authorization"}}
  public ruta=0
  //URLs to connect definition
  urlVer='http://localhost:'+this.apiPort+'/api/login/verificar';
  urlReg='http://localhost:'+this.apiPort+'/api/login/registrar';
  urlPerf='http://localhost:'+this.apiPort+'/api/login/PerfilUsuario';
  urlEPerf='http://localhost:'+this.apiPort+'/api/login/EditarPerfil';
  urlRep1='http://localhost:'+this.apiPort+'/api/Dashboard/ReporteConsumo'; 
  urlRep2='http://localhost:'+this.apiPort+'/api/Dashboard/ReporteDispositivosU'; 
  urlRep3='http://localhost:'+this.apiPort+'/api/Dashboard/ReportePeriodo';
  urlTL='http://localhost:'+this.apiPort+'/api/Dashboard/TiendaLinea';
  urlBuy='http://localhost:'+this.apiPort+'/api/Dashboard/EnviarCorreo';
  
  

  constructor(private http: HttpClient) { }
   //GetJson method implements .get of httpclient, just requires the route number
   getJson(ruta:number){
    if(ruta==1){
      return this.http.get(this.urlPerf,this.header)
    }if(ruta==2){
      return this.http.get(this.urlRep2,this.header)
    }if(ruta==3){
      return this.http.get(this.urlRep3,this.header)
    }if(ruta==4){
      return this.http.get(this.urlTL,this.header)
    }
    else{
      console.log(ruta)
      return this.http.get(this.urlPerf,this.header)
    }

      
  }
  //PostJson method implements .post of httpclient, just requires the route number and the objest to get posted in most cases a JSON
  postJson(ruta:number,obj:any){
    if(ruta==1){
      return this.http.post(this.urlVer,obj,this.header);
    }if(ruta==2){
      return this.http.post(this.urlReg,obj,this.header);
    }if(ruta==3){
      return this.http.post(this.urlPerf,obj,this.header);
    }if(ruta==4){
      return this.http.post(this.urlEPerf,obj,this.header);
    }if(ruta==5){
      return this.http.post(this.urlRep1,obj,this.header);
    }if(ruta==6){
      return this.http.post(this.urlBuy,obj,this.header);
    }else{
      return this.http.post(this.urlVer,obj,this.header);
    }
}
}