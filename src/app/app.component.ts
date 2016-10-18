import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/services/storage.service';
//import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private _storage: StorageService/*, private _spinner: SpinnerService*/) { }

  public ngOnInit(): void { }

  private ngAfterViewInit(): void {
    this.lastLogin();
    //this._spinner.hide();
  }

  private lastLogin(): void {
    let last_login = this._storage.get('last_login');
    this._storage.put('last_login', String(new Date()));
  }
 }
