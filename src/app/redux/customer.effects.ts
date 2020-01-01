
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as customerActions from './customer.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DetailService } from '../services/detail.service';

@Injectable()

export class CustomerEffects {

constructor(private actions$:Actions,
 // private customerService:CustomersService,
  private detailService:DetailService){}
// actions$ observable de todas las acciones despachadas en  el store
// Al terminar hemos de retornar un observable con una nueva acción
// que el sistema encauzará para ser despachada
// https://medium.com/@asfo/usando-concatmap-mergemap-y-forkjoin-en-angular-para-peticiones-http-c70f65df54af
loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.loadRequest),
      mergeMap(() =>
        this.detailService.getAll() .pipe(
          map(customers => customerActions.loadSuccess({customers})),
          //map(customers => customerActions.loadSuccess({customers})),
          catchError(error => of(customerActions.loadFailure(error)))
        )
      )
    )
  );
}
/*
https://github.com/carherco/curso-angular/blob/master/docs/index.md
carherco
https://github.com/carherco/curso-angular/blob/master/docs/observables.md
pipe, la cual es una función que tiene un número ilimitado de argumentos,
 cada uno de los cuales es un operador reactivo que actúa sobre los valores
  que va generando el observable. 
  La salida de cada uno de estos operadores es la entrada del siguiente operador y la salida final constituye
 el data stream que se pasará a los observadores subscritos.
https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff
https://tech.cornershop.io/programaci%C3%B3n-reactiva-con-rxjs-bebc9432485f
pipeable operators, que son funciones que nos permiten transformar 
la data que nuestros observables emiten los operadores se pasan como parametros
al metodo pipe 
ninguna de estas operaciones se realizará,
 si es que no nos suscribimos al Observable.
const number$ = interval(1000).pipe(
  filter(v => v % 2 === 0),
  // si da true pasa al siguiente operador
  // este es scan toma el ultimo valor emitidopor el obervable
  el valor actual los suma y retorna este resultado a map
  scan((acc, v) => acc + v),
  // map recibe la suma y lo transforma en n string
  map(v => `n${v}`)
);
number$.subscribe(
  data => console.log(data),
);
map operator is the most common of all. For each value that
 the Observable emits you can
 apply a function in which you can modify the data
 concatMap  las peticiones se hacen lineales, es decir, 
 una tras otra, termina la petición 1, sigue con la 2,
  termina la 2, sigue con la 3…y así sucesivamente hasta terminar.
mergeMap todas las peticiones salen y no esperan a que la anterior termine
no va en orden y depende a la respuesta.
 La diferencia con concatMap es que esta
  no!!! tira las peticiones 1 por 1 esperando termine la anterior
   si no que empieza a tirarlas directo y una vez que responde
    una puedes usar esa respuesta y al igual que concatMap no 
    interfiere con las demás, es 
decir, falla la 15 de los 30 días y no se ven afectados los otros 29.
el inconveniente con este caso es que así como van respondiendo 
las peticiones es que vamos jalando la información y es ahí donde está 
el problema. Si la petición al día 3 como dije tiene 100 registros, 
 a responder quizá antes que la petición 1,
 por lo que se mostraría primero el día 3.conmergeMap
*/