import { Component } from '@angular/core';
import { TimeService } from './shared/services/time.service';
import { StorageService } from './shared/services/storage.service';


@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = "";

  constructor(
    private _storage: StorageService,
    private time: TimeService
  ) {
    this.time.get().subscribe((data) => {
      this.title = data;
    })
  }
}
