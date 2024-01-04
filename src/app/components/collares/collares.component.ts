import { Component, OnInit } from '@angular/core';
import { AretesService , Collares } from '../../service/aretes.service' ;

@Component({
  selector: 'app-collares',
  templateUrl: './collares.component.html',
  styleUrls: []
})
export class CollaresComponent implements OnInit {
  collares:Collares[] = [];


  constructor( private  _CollaresService: AretesService){

  }

  ngOnInit(){
    this.collares = this._CollaresService.getCollares();
  }
}
