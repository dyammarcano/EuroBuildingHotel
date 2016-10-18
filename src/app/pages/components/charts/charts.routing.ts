import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './';


const routes: Routes = [
    {
        path: '',
        component: ChartsComponent,
        data: {
            title: 'Charts'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRouting {}
