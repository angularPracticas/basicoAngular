import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  borrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  borrando(){
    //this.heroes.pop();
    this.borrado = this.heroes.shift() || '';
  }
}
