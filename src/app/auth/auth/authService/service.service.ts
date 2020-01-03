import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:3000/api';
  token;
  constructor(private http: HttpClient,private router: Router) { }
  login(email: string, password: string) {
     this.http.post(this.uri + '/login', {email: email,password: password})
    .subscribe((resp: any) => {

      localStorage.setItem('token', resp.token);
    })


  }
  register(email: string, password: string,name:string,id) {
   return this.http.post(this.uri + '/register', {email: email,password: password,name:name,id:id})
   /*.subscribe((resp: any) => {
      console.log('register:',resp);
   })*/


 }
      //localStorage.setItem('token',resp['token']);
     // console.log('token recibido login',JSON.stringify(resp.token));
     // this.router.navigate(['customer/add']);

// localStorage.setItem('usuario', JSON.stringify(this.user));
// Para guardar un objeto en LocalStorage, antes debemos convertirlo a JSON string,

    getToken(){
     // const datoToken = JSON.parse(localStorage.getItem('token'));
     // console.log('datoToken',datoToken);
      return localStorage.getItem('token');
      // Para recuperar un objeto almacenado en LocalStorage será necesario convertir el JSON string a un objeto
// borra todo el localstorage localStorage.clear();
    }
    logout() {
      localStorage.removeItem('token');
    }

    public logIn(): boolean {
      return (localStorage.getItem('token') !== null);
    }

  }


