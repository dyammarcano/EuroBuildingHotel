import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartsComponent } from './';
import { ChartsRouting } from './charts.routing';


@NgModule({
    imports: [
        ChartsRouting,
        ChartsModule
    ],
    declarations: [ ChartsComponent ]
})
export class ChartJSModule { }
