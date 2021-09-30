import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable() 
export class DbzService{

    constructor(){
        console.log('Servicio inicializado');
    }

    private personajesDb: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
        {
          nombre: 'Bulma',
          poder: 800
        }
      ]

      get personajes(): Personaje[]{
          return [...this.personajesDb];
      }

    agregarPersonaje( personaje: Personaje ){
        this.personajesDb.push( personaje );
    }
}