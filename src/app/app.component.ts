import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector : 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './theme/theme.scss', './theme/initial.scss']
})
export class AppComponent {}
