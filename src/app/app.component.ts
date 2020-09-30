import { Component } from '@angular/core';
import { AnnuncioService } from './service/annuncio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monster-frontend';

  constructor(private annuncioService: AnnuncioService){

  }


  ngOnInit(){
    
    this.annuncioService.getAnnuncios().subscribe((res)=>{
        
      
        console.log(res);
        
      }
    );


    

  }
}
