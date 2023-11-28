import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arete-tarjeta',
  templateUrl: './arete-tarjeta.component.html',
  styleUrls: ['./arete-tarjeta.component.css']
})
export class AreteTarjetaComponent {
  @Input() arete: any = {};
  @Input() index: number = 0;

  @Output() areteSeleccionado: EventEmitter<number>;



  constructor(private router: Router,) {
    this.areteSeleccionado = new EventEmitter()

  }

  verArete() {
    // console.log(this.index);
    this.router.navigate(['/arete', this.index]);
    // this.areteSeleccionado.emit(this.index);

  }

}
