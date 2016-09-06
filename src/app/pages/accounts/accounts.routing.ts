import { Routes, RouterModule }  from '@angular/router';

import { Accounts } from './accounts.component';
//import { List } from './components/list';
//import { Admin } from './components/admin';
//import { Account } from './components/account';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Accounts,
    children: [
      //{ path: 'inputs', component: Inputs },
      //{ path: 'layouts', component: Layouts }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

/*import {Routes, RouterModule} from '@angular/router';

import {NameComponent} from './name.component';

export const routes: Routes = [
  {path: 'path', component: NameComponent},
];

export const routing = RouterModule.for$
{
  Root | Child
}
(routes);

export const routedComponents = [NameComponent];*/
