import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './shared/components/sidebar/full/full-layout.component';
import { SimpleLayoutComponent } from './shared/components/sidebar/simple/simple-layout.component';

//Main view
import { DashboardComponent } from './pages/dashboard/dashboard.component';

//Components
import { ButtonsComponent } from './pages/components/buttons/buttons.component';
import { CardsComponent } from './pages/components/cards/cards.component';
import { FormsComponent } from './pages/components/forms/forms.component';
import { SocialButtonsComponent } from './pages/components/social/social-buttons.component';
import { SwitchesComponent } from './pages/components/switches/switches.component';
import { TablesComponent } from './pages/components/tables/tables.component';

//Icons
import { FontAwesomeComponent } from './pages/components/icons/font-awesome.component';
import { SimpleLineIconsComponent } from './pages/components/icons/simple-line-icons.component';

//Widgets
import { WidgetsComponent } from './pages/components/widgets/widgets.component';

//Charts
import { ChartsComponent } from './pages/components/charts/charts.component';

//Pages
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';


const appRoutes : Routes = [
  {
    path: 'settings',
    redirectTo: 'settings',
    pathMatch: 'full'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: []
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }
      },
      {
        path: 'components',
        redirectTo: 'components/buttons',
        pathMatch: 'full'
      },
      {
        path: 'components',
        data: {
          title: 'Components'
        },
        children: [
          {
            path: 'buttons',
            component: ButtonsComponent,
            data: {
              title: 'Buttons'
            }
          },
          {
            path: 'cards',
            component: CardsComponent,
            data: {
              title: 'Cards'
            }
          },
          {
            path: 'forms',
            component: FormsComponent,
            data: {
              title: 'Forms'
            }
          },
          {
            path: 'social-buttons',
            component: SocialButtonsComponent,
            data: {
              title: 'Social buttons'
            }
          },
          {
            path: 'switches',
            component: SwitchesComponent,
            data: {
              title: 'Switches'
            }
          },
          {
            path: 'tables',
            component: TablesComponent,
            data: {
              title: 'Tables'
            }
          }
        ]
      },
      {
        path: 'icons',
        redirectTo: 'icons/font-awesome',
        pathMatch: 'full'
      },
      {
        path: 'icons',
        data: {
          title: 'Icons'
        },
        children: [
          {
            path: 'font-awesome',
            component: FontAwesomeComponent,
            data: {
              title: 'Font Awesome'
            }
          },
          {
            path: 'simple-line-icons',
            component: SimpleLineIconsComponent,
            data: {
              title: 'Simple Line Icons'
            }
          }
        ]
      },
      {
        path: 'widgets',
        component: WidgetsComponent,
        data: {
          title: 'Widgets'
        }
      },
      {
        path: 'charts',
        component: ChartsComponent,
        data: {
          title: 'Charts'
        }
      }
    ]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
