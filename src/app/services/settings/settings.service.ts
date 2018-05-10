import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  // Guardo los ajustes por default
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document) {
    // Cuando inicia, se carga el tema selecciona o el por defecto
    this.cargarAjuster();
  }
  // Se usa para cargar desde el dataStorage
  guardarAjustes() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjuster() {
    if (localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      // console.log('Cargado del localStorage');
      this.aplicarTema( this.ajustes.tema );
    } else {
      // console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }
  }
  // Se aplica el tema, se le pasa la url al index.html
  aplicarTema( tema: string ) {
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}

// Se usa para "restringirme" la cantidad de variables que voy a usar

interface Ajustes {
  temaUrl: string;
  tema: string;
}
