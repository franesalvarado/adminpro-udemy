import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    // Una vez cargada la pagina, se carga el check
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {
    // Se llama a la funcion que cambio el check
    this.aplicarCheck( link );
    // Se llama el servicio para aplicar el tema en la pagina
    this._ajustes.aplicarTema( tema );
  }

  // Aplicar check cuando se cambia o selecciona otro tema
  aplicarCheck( link: any ) {
    // Se selecciona todos los links desde la propiedad en comun (selector)
    let selectores: any = document.getElementsByClassName('selector');
    // Se renueve las clases working
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }
    // Se carga la clases working al link seleccionado
    link.classList.add('working');
  }

  // Colocar check que tiene el dataStorage
  colocarCheck( ) {
    // Se selecciona todos los links desde la propiedad en comun (selector)
    let selectores: any = document.getElementsByClassName('selector');
    // Se carga el tema que cargado en el servicio
    let tema = this._ajustes.ajustes.tema;
    // Se recorden todos los selectores buscando el tema selecciona por el usuario
    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
      }
    }
  }
}
