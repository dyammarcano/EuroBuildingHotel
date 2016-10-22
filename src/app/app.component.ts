import { Component } from '@angular/core';
import { TimeService, StorageService } from './shared/services';


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
