import { AbstractControl } from '@angular/forms';
import { DetailService } from 'src/app/services/detail.service';
import { map } from 'rxjs/operators';
export class MyValidators {

 service:DetailService


static hasEmail(service:DetailService ){
return (ctrl:AbstractControl)=>{
  const email=ctrl.value;
  console.log(email);
return service.hasEmail(email).pipe(
  map(hasEmail=>{hasEmail?{ hasEmail: true }:null


  })
)
}
}

static isValidPassword(form: AbstractControl) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');
  if (confirmPassword.value !== password.value) {
    return { passwordNotValid: true };
  }
  return null;
}

}



