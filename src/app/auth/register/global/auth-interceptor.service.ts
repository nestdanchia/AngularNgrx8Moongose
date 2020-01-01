import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpErrorResponse } from "@angular/common/http";
import { ServiceService } from '../../auth/authService/service.service';
import { Observable,throwError, BehaviorSubject  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
/*{
  providedIn: 'root'
} */
@Injectable()
export class AuthInterceptorService implements HttpInterceptor  {
private token="";

  constructor(private authService: ServiceService, private router: Router) { }
  public intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>  {
    this.token = this.authService.getToken();
    console.log('Token',this.token);
    const authToken=`Bearer ${this.token}`;
    const headers = req.headers.set("Authorization", authToken);
    const authorizedReq = req.clone({ headers });
    const handledRequest = next.handle(authorizedReq);
    return handledRequest;
    /* req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(req);*/
  }
}
    /*
    this.token = this.authService.getToken();
    console.log('Token',this.token);
    const authToken=`Bearer ${this.token}`;
    const headers = req.headers.set("Authorization", authToken);
    // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    //req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    const authorizedReq = req.clone({ headers });
    const handledRequest = next.handle(authorizedReq);
    return handledRequest;
    */



   /* req = req.clone({
        setHeaders: {
            Authorization: "Bearer " + authToken
        }
    });*/
    /*
    return next.handle(req).pipe(
    catchError((err: HttpErrorResponse) => {

      if (err.status === 403) {
        //error 401, significa que la URL o servicio solicitado requiere de
        //autenticación y ésta no ha podido ser validada
        this.router.navigateByUrl('/auth/login');
      }

      return throwError( err );

    })
  );*/

    /*
     let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request);
  }
     */

/*
intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
*/
