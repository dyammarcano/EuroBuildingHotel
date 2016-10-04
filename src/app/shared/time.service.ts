import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable()
export class TimeService {

  constructor() {
    /*var source = Observable
      .interval(1000)
      .map((v) => moment().format('X'))
      .subscribe(
      function (x) {
        console.log('Next: ' + x);
      },
      function (err) {
        console.log('Error: ' + err);
      },
      function () {
        console.log('Completed');
      });

      setTimeout(() => {
        source.unsubscribe();
        console.log('launch unsubscribe');
      }, 1000 * 30);**/
  }

  get(): Observable<any> {
    return Observable
      .interval(1000)
      .map((v) => moment().format('X'));
  }

  start(): Observable<any> {
    return Observable.create((payload) => {
      payload.next(moment());
    });
  }
}
