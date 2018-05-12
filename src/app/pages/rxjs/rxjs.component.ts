import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  // Maneja las subscripciones de los observable
  subscrition: Subscription;

  constructor() {

    this.subscrition = this.regresaObservable()
      .subscribe(
        // Cuando hace un next muestra lo siguiente (La variable numero viene de parametro next)
        numero => console.log( 'Subs ', numero ),
        // Si hay error sale lo siguiente (Error viene del parametro error)
        error => console.log( 'Error en el obs ', error),
        // Esto en caso de complete, en este caso nunca recibe un parametro porqué termino el observable
        () => console.log('Termino el observarble!')
      );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log( 'la pagina se cerró' );
    this.subscrition.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;

        let salida = {
          valor: contador
        };
        // Importante, con esto camina
        observer.next(salida);

        // En caso de terminar
        // if ( contador === 3) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // En caso de error
        // if ( contador === 2 ) {
        //   observer.error('HELP ME');
        // }

      }, 500 );

  })
  // Si falla intenta dos veces mas (Tres en total, la primera no cuenta como retry)
  .retry(2)
  // Mapea los valores del primer return del observable
  .map( (resp: any) => {
    return resp.valor;
  })
  // Filtra los valores, siempre conveniente luego del map
  .filter( (valor, index) => {
    if ( ( valor % 2) === 1 ) {
      // impar
      return true;
    } else {
      // par
      return false;
    }
  });

  }
}
