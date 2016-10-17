import { Routes, RouterModule } from '@angular/router';

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

const appRoutes : Routes = [
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
