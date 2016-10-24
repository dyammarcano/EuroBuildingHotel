import {Component, OnInit} from '@angular/core';
import { TimeService, StorageService } from './shared/services';


@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string;
  private last_login: string;

  constructor(private _storage: StorageService, private time: TimeService) {
    this.time.get().subscribe((data) => {
      this.title = data;
    })
  }

  ngOnInit(): void {
    this.last_login = this._storage.load('last_login');
    this._storage.save('last_login', Date.now().toString());
  };

  ngAfterViewInit(): void {
    //alert(`last login ${ this.last_login }`);
    console.log(this.last_login);
  };

  ngOnDestroy(): void {

  };
}
