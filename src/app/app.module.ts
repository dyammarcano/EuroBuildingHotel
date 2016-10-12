<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { routing } from './app.routing';
=======
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { StorageService, StartupService } from './shared';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InteralStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
>>>>>>> master

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

//Main view
import { DashboardComponent } from './dashboard/dashboard.component';

<<<<<<< HEAD
//Components
import { ButtonsComponent } from './components/buttons.component';
import { CardsComponent } from './components/cards.component';
import { FormsComponent } from './components/forms.component';
import { SocialButtonsComponent } from './components/social-buttons.component';
import { SwitchesComponent } from './components/switches.component';
import { TablesComponent } from './components/tables.component';
=======
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [
    App
  ],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
>>>>>>> master

//Icons
import { FontAwesomeComponent } from './icons/font-awesome.component';
import { SimpleLineIconsComponent } from './icons/simple-line-icons.component';

<<<<<<< HEAD
//Widgets
import { WidgetsComponent } from './widgets/widgets.component';

//Charts
import { ChartsComponent } from './charts/charts.component';

//Pages
import { p404Component } from './pages/404.component';
import { p500Component } from './pages/500.component';
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';

//Services
import { StorageService } from './shared/storage.service';
import { SocketService } from './shared/socket.service';


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
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    SocketService,
    StorageService,
  ],
  providers: [
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
=======
  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
>>>>>>> master
