import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class StorageService {

  constructor() { }

  public get = (key: string): any => {
    localStorage.getItem(key);
  }

  public put = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  }

  public del = (key: string): void => {
    localStorage.removeItem(key);
  }
}
