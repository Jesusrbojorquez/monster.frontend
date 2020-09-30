import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnnuncioDTO } from '../model/annuncio-dto';


@Injectable({
  providedIn: 'root'
})
export class AnnuncioService {

  constructor(private httpClient : HttpClient) { }
  ip:string="http://localhost";
  port:string="8080"; 
  baseRoot:string="/monster"
  url: string =this.ip+":"+this.port+this.baseRoot;

  
  public getAnnuncios(){
    return this.httpClient.get<AnnuncioDTO[]>(`${this.url}/annuncio/`);
  }

}
