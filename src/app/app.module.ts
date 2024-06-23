import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  provideHttpClient,
  withInterceptorsFromDi,
  withXsrfConfiguration
} from '@angular/common/http';
import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tap } from 'rxjs/operators';

import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './login/login.component';
import { AlertService } from './service/alert.service';
import { SessionService } from './service/session.service';
import { PageTitleComponent } from './page-title/page-title.component';
import { NgbAlertModule, NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(tap(
      () => {
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.error) {
          const message = error.error.message;
          if (!message) {
            this.alertService.danger(error.message);
          } else if (message.indexOf('Access Denied') === -1) {
            this.alertService.danger(message);
          }
        }
      }
    ));
  }
}

export function init(sessionService: SessionService) {
  return () => {
    sessionService.fetchPrincipal();
  };
}

// Import routing module
// Import 3rd party components
@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginComponent,
    AlertContainerComponent,
    PageTitleComponent,
    SidebarComponent,
    NavbarComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbAlertModule,
    NgbDropdownModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorResponseInterceptor,
      multi: true
    }, {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [SessionService],
      multi: true
    },
    NgbDropdown,
    provideHttpClient(withInterceptorsFromDi(), withXsrfConfiguration({cookieName: 'XSRF-TOKEN'}))
  ]
})
export class AppModule {
}
