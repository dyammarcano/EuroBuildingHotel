import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/sidebar/directives/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar/directives/sidebar.directive';
import { AsideToggleDirective } from './shared/sidebar/directives/aside.directive';
import { BreadcrumbsComponent } from './shared/sidebar/components/breadcrumb.component';
import { AppRouting } from './app.routing';
import { FullLayoutComponent } from './shared/sidebar/full/full-layout.component';
import { SimpleLayoutComponent } from './shared/sidebar/simple/simple-layout.component';
import { SocketService } from './shared/services/socket.service';
import { StorageService } from './shared/services/storage.service';
//import { SpinnerService } from './shared/services/spinner.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    Ng2BootstrapModule,
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [
    StorageService,
    SocketService,
    //SpinnerService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
