import { DetailService } from './../../../services/detail.service';
import { AsyncValidator, AbstractControl, ValidationErrors,NG_ASYNC_VALIDATORS } from '@angular/forms';

import {catchError,  map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Directive, forwardRef, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UniqueEmailValidatorService implements AsyncValidator {
  constructor(private customService: DetailService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.customService.hasEmail(ctrl.value).pipe(
      map(isTaken => (isTaken ? { hasEmail: true } : null)),
      catchError(() => null)
    );
  }
}

@Directive({
  selector: '[UniqueEmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() =>  UniqueEmailValidatorService),
      multi: true
    }
  ]
})
export class UniqueAlterEgoValidatorDirective {
  constructor(private validator:  UniqueEmailValidatorService) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }

}
