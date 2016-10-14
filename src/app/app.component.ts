import { Component } from '@angular/core';
import { StorageService } from './shared/services/storage.service';


@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private storage: StorageService) {
    this.storage.put('hora', String(new Date()));
  }

  ngOnInit() { }
 }
