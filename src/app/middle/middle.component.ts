import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {


  listAnnuncios=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
