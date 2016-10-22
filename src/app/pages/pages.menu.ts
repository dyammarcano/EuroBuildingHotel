export const PAGES_MENU = [
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
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
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
