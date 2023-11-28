import { Component, OnInit } from '@angular/core';
import { AretesService, Arete } from '../../service/aretes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-aretes',
  templateUrl: './aretes.component.html',
  styleUrls: ['./aretes.component.css']
})
export class AretesComponent implements OnInit {

  aretes: Arete[] = [];

  constructor(private _aretesService: AretesService, private router: Router,) {
    // console.log("constructor");


  }
  ngOnInit() {
    this.aretes = this._aretesService.getAretes();

    // console.log(this.aretes);


  }

  verArete(idx: number) {
    this.router.navigate(['/arete', idx])

  }
}
