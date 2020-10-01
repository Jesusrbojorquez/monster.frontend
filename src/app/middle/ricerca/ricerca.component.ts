import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from 'src/app/service/annuncio.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {


  
  keyword:string;

  listAnnuncios=[];

  isHidden=true;

  constructor(private annuncioService: AnnuncioService) { }

  ngOnInit(): void {

    
  
  }

  onClickButton(){
    if(this.keyword){

      this.isHidden=true;
      this.annuncioService.getAnnunciosBykeyword(this.keyword).subscribe((res)=>{
        this.listAnnuncios=res;
        console.log(this.listAnnuncios);
      });
      

    }
    else{
      this.isHidden=false;
    }
    
  }

}
