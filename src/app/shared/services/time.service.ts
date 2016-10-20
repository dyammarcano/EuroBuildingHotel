import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';


@Injectable()
export class TimeService {

  constructor() { }

  public get(): Observable<any> {
    return Observable
      .interval(1000)
      .map((v) => moment().format('LLLL'));
  }
}
