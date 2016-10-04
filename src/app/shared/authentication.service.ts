import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import * as _ from 'lodash';
import { StorageService } from './';

@Injectable()
export class StartupService {

  private url: string = "http://node-5622245.rhcloud.com:8000";
  private socket: any;
  private ip: string;
  private device: string;

  constructor(public storage: StorageService) {



    if (_.isNull(this.storage.get('ip'))) {
      //this.apiServer();
      //this.myFunction();
    } else {
      this.apiDevice();
    }
  }

  /*private apiServer = () => {
    this.socket = io(this.url);

    this.on('connect').subscribe(() => { console.log('web api connected!') });
    this.on('disconnect').subscribe(() => { console.log('web api disconnected!') });
    this.on('resolve:device').subscribe((payload) => {
      storag.set('ip', payload);
      this.ip = payload;

      this.socket = io(this.ip);
    });
  }*/

  private apiDevice = () => {
    this.socket = io(`http://${this.storag.get('ip')}:5728/device`);

    this.on('connect').subscribe(() => { console.log('local device connected!') });
    this.on('disconnect').subscribe(() => { console.log('local device disconnected!') });
  }

  public on(event: string) {
    return Observable.fromEvent(this.socket, event);
  }

  public emit(event: string, message: string) {
    this.socket.emit(event, message);
  }

  /*private myFunction = () => {

    if (_.isNull(storag.get('device'))) {
      var device = prompt("Identificador del dispositivo:", ""); //5AD9420A
      storag.set('device', device);
    }

    if (!_.isNull(device)) {
      this.socket.emit('resolve:device', device);
    }
  }*/
}
