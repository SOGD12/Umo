import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AretesService } from "../../service/aretes.service";

@Component({
  selector: 'app-collar',
  templateUrl: './collar.component.html',
})
export class CollarComponent {

  collar: any = {};

  constructor(private activateRoute: ActivatedRoute, private _aretesService: AretesService){
    this.activateRoute.params.subscribe(params =>{
      //Obtenemos el parametro que queremos de los items (collares) ejm -> id

      this.collar = this._aretesService.getCollar(params['id']);
      
    })
  }
}
