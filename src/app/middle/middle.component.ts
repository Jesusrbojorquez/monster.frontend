import { Component, OnInit } from '@angular/core';
import { AnnuncioDTO } from '../model/annuncio-dto';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {


  listAnnuncios;
  
  constructor() { }

  ngOnInit(): void {
    console.log("padre");
  }


  ricerca(listAnnuncio :AnnuncioDTO[]) {
   this.listAnnuncios=listAnnuncio;

   console.log("arriva padre");

   console.log(this.listAnnuncios);
  }

}
