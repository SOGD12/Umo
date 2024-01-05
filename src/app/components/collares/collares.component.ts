import { Component, OnInit } from '@angular/core';
import { AretesService , Collares } from '../../service/aretes.service' ;
import {Router} from "@angular/router";
@Component({
  selector: 'app-collares',
  templateUrl: './collares.component.html',
  styleUrls: []
})
export class CollaresComponent implements OnInit {
  collares:Collares[] = [];

 //AretesService es la appi donde estan todos los items
  constructor( private  _CollaresService: AretesService, private router : Router){

  }

  ngOnInit(){
    this.collares = this._CollaresService.getCollares();

  }

  verCollar(idx:number){
    console.log(idx);
    this.router.navigate(['/collar',idx])
    
  }

}
