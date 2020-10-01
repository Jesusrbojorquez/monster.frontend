import { Component, Input, OnInit } from '@angular/core';
import { AnnuncioDTO } from 'src/app/model/annuncio-dto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input('list') listAnnuncio:AnnuncioDTO[] ;

  constructor() { }

  ngOnInit(): void {

    console.log("figlio");
    
    setTimeout(this.test, 10000);
  }


  private  test(){
    console.log(this.listAnnuncio)
  }
}
