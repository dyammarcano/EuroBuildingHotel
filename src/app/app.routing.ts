import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';


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
                loadChildren: 'app/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: 'app/components/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: 'app/components/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: 'app/components/charts/charts.module#ChartJSModule'
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
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRouting { }
