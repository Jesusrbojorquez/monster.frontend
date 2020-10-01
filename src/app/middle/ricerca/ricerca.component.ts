import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from 'src/app/service/annuncio.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  constructor(private annuncioService: AnnuncioService) { }

  ngOnInit(): void {

    this.annuncioService.getAnnuncios().subscribe((res)=>{
        
      
      console.log(res);
      
    }
  );

  }

}
