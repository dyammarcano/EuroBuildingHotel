import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Maps } from './maps.component';
import { GoogleMaps } from './components/google-maps.component';


const routes: Routes = [
  {
    path: '',
    component: Maps,
    children: [
      { path: 'googlemaps', component: GoogleMaps },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRouting { }
