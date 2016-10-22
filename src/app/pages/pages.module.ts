import { NgModule } from '@angular/core';
import { p404Component } from './404/404.component';
import { p500Component } from './500/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesRouting } from '../pages';


@NgModule({
    imports: [
      PagesRouting
    ],
    declarations: [
        p404Component,
        p500Component,
        LoginComponent,
        RegisterComponent
    ]
})
export class PagesModule { }
