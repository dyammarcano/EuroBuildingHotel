import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './shared/sidebar/full/full-layout.component';
import { SimpleLayoutComponent } from './shared/sidebar/simple/simple-layout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
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
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: 'app/pages/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: 'app/pages/components/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: 'app/pages/components/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: 'app/pages/components/charts#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: 'app/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
