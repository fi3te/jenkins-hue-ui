import { FormsModule } from '@angular/forms';
import { SessionService } from './service/session.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientXsrfModule, HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Injectable, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './views/register/register.component';
import { AlertContainerComponent } from './alert-container/alert-container.component';
import { LoginComponent } from './login/login.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

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
  }
}

// Import routing module
// Import 3rd party components
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
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
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AlertContainerComponent
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
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [SessionService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
