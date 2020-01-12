
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as customerActions from './customer.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DetailService } from '../services/detail.service';

@Injectable()

export class CustomerEffects {

  constructor(private actions$: Actions,

    private detailService: DetailService) { }
  // actions$ observable de todas las acciones despachadas en  el store
  // Al terminar hemos de retornar un observable con una nueva acción
  // que el sistema encauzará para ser despachada

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.loadRequest),
      mergeMap(() =>
        this.detailService.getAll().pipe(
          map(customers => customerActions.loadSuccess({ customers })),
          //map(customers => customerActions.loadSuccess({customers})),
          catchError(error => of(customerActions.loadFailure(error)))
        )
      )
    )
  );
}
