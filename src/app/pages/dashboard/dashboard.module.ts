import { NgModule }                 from '@angular/core';
import { ChartsModule }             from 'ng2-charts/ng2-charts';

import { DashboardComponent }       from './dashboard.component';
import { DashboardRouting }   from './dashboard.routing';

@NgModule({
  imports: [
    DashboardRouting,
    ChartsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
