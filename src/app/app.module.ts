import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/directives/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/directives/sidebar.directive';
import { AsideToggleDirective } from './shared/directives/aside.directive';
import { BreadcrumbsComponent } from './shared/components/breadcrumb.component';
import { routing } from './app.routing';

//Layouts
import { FullLayoutComponent } from './components/layouts/full-layout.component';
import { SimpleLayoutComponent } from './components/layouts/simple-layout.component';

//Main view
import { DashboardComponent } from './dashboard/dashboard.component';

//Components
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsComponent } from './components/forms/forms.component';
import { SocialButtonsComponent } from './components/social/social-buttons.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { TablesComponent } from './components/tables/tables.component';

//Icons
import { FontAwesomeComponent } from './components/icons/font-awesome.component';
import { SimpleLineIconsComponent } from './components/icons/simple-line-icons.component';

//Widgets
import { WidgetsComponent } from './components/widgets/widgets.component';

//Charts
import { ChartsComponent } from './components/charts/charts.component';

//Pages
import { LoginComponent } from './pages/login/login.component';

//Services
import { StorageService } from './shared/services/storage.service';
import { SocketService } from './shared/services/socket.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    Ng2BootstrapModule,
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    WidgetsComponent,
    ChartsComponent,
    LoginComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [
    SocketService,
    StorageService,
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
