import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnnuncioDTO } from 'src/app/model/annuncio-dto';
import { AnnuncioService } from 'src/app/service/annuncio.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  @Output() getAnnuncios = new EventEmitter<AnnuncioDTO[]>();
  
  keyword:string;


  isHidden=true;

  constructor(private annuncioService: AnnuncioService) { }

  ngOnInit(): void {

    
  
  }

  onClickButton(){
    if(this.keyword){

      this.isHidden=true;
      this.annuncioService.getAnnunciosBykeyword(this.keyword).subscribe((res)=>{
        /* this.listAnnuncios=res; */
        console.log(res);

        this.getAnnuncios.emit(res);
      });
      

    }
    else{
      this.isHidden=false;
    }
    
  }

}
