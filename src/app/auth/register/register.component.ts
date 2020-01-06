import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from '../auth/authService/service.service';
import { MyValidators } from '../auth/utils/validators';
import { DetailService } from 'src/app/services/detail.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /*
  En este proyecto implemente varias indicaciones del tutorial
  tambien por mi cuenta configure servidor node con base mongo dentro de carpeta
  schema y tambien estado con ngrx 8
  tambien implemente interceptores para el token y errores
  Pero!!
  En carpeta auth/register register.component no logra validar
  Asyncronicamente para determinar si exite el email de un usuario
   busque y no encuentro el error solo vi una solucion
  que dice que se vario en angular 5 a esta forma pero tampoco resulto
email: ['',{
        validators:[Validators.required, Validators.email],
        asyncValidators:[ MyValidators.hasEmail(this.service)]
        //,[ MyValidators.hasEmail(this.service)]
      }
    ],
  */
  // formModel es el modelo del formulario
  // FormControl es la unidad del formulario controla sus cambios
  // FormGroup es una coleccion de FormsControls valida al formulario
  // como un conjunto
  // sin formbuilder que simplifica al modelo  se define el modelo con
  // formModel :FormGroup = new FormGroup({})---><form [formGroup]="formModel">
  // FormBuilder se inyecta mediante ReactiveFormsModule
  //AbstracControl superclase de FormControl FormGroup FormArray
  // puede crear validaciones para todas ellas define metodos estaticos
  // para los atributos standard de HTML5
  // Custom Validator funcion que acepta una instancia de
  // FormControl FormGroup FromArray retorna un objeto error
  /*
  Si un
FormControl tene más de un validador se agregan como arreglos
  validador funcion que acepta un abstractControl y retorna un objeto literal
  donde su clave k es el codigo de error true si falla false si pasa exitosamente

  function ssnValidator(control: FormControl): any {
const value = control.value || '';
const valid = value.match(/^\d{9}$/);
// si el valor es invalido retornamos un objeto error
return valid ? null : { ssn: true };
}
  interface ValidatorFn {
(c: AbstractControl): {[minlength(key): string]: any};
} any es el objeto
  objetos error
  {
    key--->minlength
minlength: {
requiredLength: 7,
actualLength: 5
}
}


  {
required: true
}
  */
  form: FormGroup;
  public flag:any;
  public d = new Date();
   public n = (this.d.valueOf()).toString();
  //this.form.value.id
      public id=this.n;

  constructor(

    private formBuilder: FormBuilder,
    private authService: ServiceService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private service:DetailService
  ) {

    this.buildForm();
   }

  ngOnInit() {

  }
  /*revert() {
    <mat-card-actions>
<button type="reset" (click)="revert()">Revert</button>
  </mat-card-actions>
    console.log(this.form.value);
    console.log(this.form.value.email);
    this.form.reset();
    <mat-error *ngIf="form.hasError('hasEmail')" >
          email ya existe
        </mat-error>
  }*/
  //  sync or async validation, add sync and
  //async validators as the second and third items in the array.
  private buildForm() {
    this.form = this.formBuilder.group({
// asi original  email: ['',[Validators.required, Validators.email]],
email: ['',[Validators.required, Validators.email],
[ MyValidators.hasEmail(this.service)]
    ],
      /*email: ['',{
        validators:[Validators.required, Validators.email],
        asyncValidators:[ MyValidators.hasEmail(this.service)]
        // MyValidators.hasEmail(this.service)
      }
    ],*/


      password: ['', [ Validators.required,
        Validators.minLength(8)]


      ],
      confirmPassword: ['', [ Validators.required, Validators.minLength(8)]],
      name:['', [ Validators.required]],
      id:[this.id, [ Validators.required]],
    }, {
      validator:    MyValidators.isValidPassword

    });
   // this.onChanges();

   // this.form.get('email').setValue('ooo@gmail.com');
  }
  public onChanges(){
    // no modifica con <mat-error *ngIf="emailField.hasError('hasEmail')" >
    this.emailField.valueChanges.subscribe(ctrl=>{
      console.log(ctrl);
     this.service.hasEmail(ctrl)
    .pipe(
      map(hasEmail=>{hasEmail?{ hasEmail: true }:null


      })
    )
    });

  }


  public getError(controlName: string): string {
    let error = '';
    const control = this.form.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
  get emailField() {

    return this.form.get('email');
  }
  get idField() {
    return this.form.get('email');
  }
  get passwordField() {
    return this.form.get('password');
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }

  private openMessage(message: string) {
    this.matSnackBar.open(message, 'Cerrar');
  }

  /*hasEmail(control :AbstractControl ){
    const email=control.value;
    return this.service.hasEmail(email).pipe(map(res => {
     return res ? null : { hasEmail: true };
   }))
  }*/



  register() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.confirmPassword;
      const name = this.form.value.name;
      console.log(this.form.value.email);
      console.log(this.form.value);
      this.authService.register(email, password,name,this.id)
      .subscribe(
        data => {this.router.navigate(['/customer'])},
        err=>console.log('error regitro Angular',err))

      }
    }
    /*hasEmail(service:DetailService ){
      return (ctrl:AbstractControl)=>{
        const email=ctrl.value;
        console.log(email);
      return service.hasEmail(email).pipe(
        map(hasEmail=>{hasEmail?{ hasEmail: true }:null


        })
      )
      }
      }*/

  }


      /*(error => {
        console.error(error);
        this.openMessage(error.message);
        <mat-error *ngIf="form.hasError('hasEmail')" >
          email ya existe
        </mat-error>
      });*/

/*

 the password and password-confirmation
 function equalValidator({value}: FormGroup): {[key: string]: any} {
const [first, ...rest] = Object.keys(value || {});
const valid = rest.every(v => value[v] === value[first]);
return valid ? null : {equal: true};
}
*/
/*
ASYNCHRONOUS VALIDATORS are functions que retornan una
promesa o un observable
Async validators can be used to
check form values against a remote server
function asyncSsnValidator(control: FormControl): Observable<any> {
const value: string = control.value || '';
const valid = value.match(/^\d{9}$/);
return Observable.of(valid ? null : { ssn: true }).delay(5000);
}
let ssnControl = new FormControl('', null, asyncSsnValidator);

*/
