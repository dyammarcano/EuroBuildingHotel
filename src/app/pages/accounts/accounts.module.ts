import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './accounts.routing';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
//import { List } from './components/list';
//import { Admin } from './components/admin';
//import { Account } from './components/account';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
    //List,
    //Admin,
    //Account
  ]
})
export default class FormsModule {}
