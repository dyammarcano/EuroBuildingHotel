import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accounts',
  encapsulation: ViewEncapsulation.None,
  template: require('./accounts.component.html'),
  styles: [require('./accounts.component.scss')],
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
