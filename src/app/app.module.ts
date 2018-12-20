import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAsideModule, AppFooterModule, AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { tap } from 'rxjs/operators';

import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './login/login.component';
import { AlertService } from './service/alert.service';
import { SessionService } from './service/session.service';
import { PageTitleComponent } from './page-title/page-title.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Import containers
const APP_CONTAINERS = [DefaultLayoutComponent];

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

  constructor(private alertService: AlertService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(tap(
      () => {},
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
    // TODO live
    // sessionService.fetchPrincipal();

    // TODO demo
    sessionService.getPrincipal().subscribe(null, () => {
      const credentials = {
        username: 'a',
        password: 'a'
      };
      sessionService.silentLogin(credentials);
    });
  };
}

// Import routing module
// Import 3rd party components
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    AccordionModule.forRoot(),
    ChartsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    AlertContainerComponent,
    PageTitleComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
