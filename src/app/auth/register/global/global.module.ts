import { CommonModule } from "@angular/common";
import {
	HTTP_INTERCEPTORS,
	HttpClientModule
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CatchInterceptorService } from './catch-interceptor.service';
import { AuthInterceptorService } from './auth-interceptor.service';


@NgModule({
	imports: [CommonModule, HttpClientModule],
	providers: [

		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true
    }
    ,
		{
			provide: HTTP_INTERCEPTORS,
			useClass:CatchInterceptorService ,
			multi: true
		}
	]
})
export class GlobalModule {}
