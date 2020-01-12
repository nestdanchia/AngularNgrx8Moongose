import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from '../auth/authService/service.service';
import { MyValidators } from '../auth/utils/validators';
import { DetailService } from 'src/app/services/detail.service';
import { map } from 'rxjs/operators';
import { UniqueEmailValidatorService } from '../auth/authService/unique-email-validator.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public flag: any;
  public d = new Date();
  public n = (this.d.valueOf()).toString();
  //this.form.value.id
  public id = this.n;

  constructor(
    private uniqueEmailValidator: UniqueEmailValidatorService,
    private formBuilder: FormBuilder,
    private authService: ServiceService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private service: DetailService,
    //private formTools:FormTools
  ) {
    // esto se ejecutaria antes de que el formulario
    //este construido

  }

  ngOnInit() {
    this.buildForm();
  }

  //  sync or async validation, add sync and
  //async validators as the second and third items in the array.
  private buildForm() {
    this.form = this.formBuilder.group({
      // asi original  email: ['',[Validators.required, Validators.email]],
      //date :[[]],
      email: ['', [Validators.required, Validators.email],//sync validators
        [this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator)
        ]
      ],


      date: [this.d.toISOString().substring(0, 10), [Validators.required]],
      password: ['', [Validators.required,
      Validators.minLength(8)]


      ],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required]],
      id: [this.id, [Validators.required]],
    },
      {
        validator: MyValidators.isValidPassword

      });

  }

  public showErrors(controlName: string) {
    const control = this.form;
    return !control.get('email').valid && control.get('email').touched
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
    return this.form.get('id');
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





  register() {
    //(ngSubmit)="onSubmit()"
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.confirmPassword;
      const name = this.form.value.name;
      console.log(this.form.value.email);
      console.log(this.form.value);
      this.authService.register(email, password, name, this.id)
        .subscribe(
          data => { this.router.navigate(['/customer']) },
          err => console.log('error regitro Angular', err))

    }

  }
}
