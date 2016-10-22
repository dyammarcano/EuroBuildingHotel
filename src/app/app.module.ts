import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { FullLayoutComponent, SimpleLayoutComponent } from './layouts';
import { SERVICES } from './shared/services';


const COMPONENTS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
  BreadcrumbsComponent,
];

const DIRECTIVES = [
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
  AsideToggleDirective,
];

const PIPES = [

];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
