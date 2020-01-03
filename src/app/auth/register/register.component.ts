import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from '../auth/authService/service.service';
import { MyValidators } from '../auth/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  public d = new Date();
   public n = (this.d.valueOf()).toString();
  //this.form.value.id
      public id=this.n;
  constructor(
    private formBuilder: FormBuilder,
    private authService: ServiceService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [ Validators.required, Validators.minLength(8)]],
      name:['', [ Validators.required]],
      id:[this.id, [ Validators.required]],
    }, {
      validators: [ MyValidators.isValidPassword ]
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
  register() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.confirmPassword;
      const name = this.form.value.name;


      this.authService.register(email, password,name,this.id)
      .subscribe(
        data => {this.router.navigate(['/customer'])},
        err=>console.log('error regitro Angular',err))

      }
    }

  }


      /*(error => {
        console.error(error);
        this.openMessage(error.message);
      });*/

