import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AretesService } from '../../service/aretes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {

  aretes: any[] = [];
  termino: string = '';

  constructor(private ActivatedRoute: ActivatedRoute,
    private _AretesService: AretesService, private _router: Router) {


  }
  verArete(idx: number) {
    this._router.navigate(['/arete', idx])

  }



  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.aretes = this._AretesService.buscarAretes(params['termino']);
      console.log(this.aretes);


    })
  }
}
