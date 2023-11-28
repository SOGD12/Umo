import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AretesService } from '../../service/aretes.service';

@Component({
  selector: 'app-arete',
  templateUrl: './arete.component.html',
})

export class AreteComponent {

  arete: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _AretesService: AretesService) {


    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.arete = this._AretesService.getArete(params['id']);
      console.log(this.arete);


    })
  };
}
