import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import * as _ from 'lodash';


@Injectable()
export class SocketService {

  private url: string = 'http://node-5622245.rhcloud.com:8000';
  private socket: any;
  private ip: string;
  private device: string;

  constructor() {

    /*if (_.isNull(localStorage.getItem('ip'))) {
      //this.apiServer(); this.myFunction();
    } else {
      this.apiDevice();
    }*/
  }

  /*private apiServer = () => {
    this.socket = io(this.url);

    this.on('connect').subscribe(() => { console.log('web api connected!') });
    this.on('disconnect').subscribe(() => { console.log('web api disconnected!') });
    this.on('resolve:device').subscribe((payload) => {
      localStorage.setItem('ip', payload);
      this.ip = payload;

      this.socket = io(this.ip);
    });
  }*/

 /* private apiDevice = () => {
    this.socket = io(`http://${localStorage.getItem('ip')}:5728/device`);

    this
      .get('connect')
      .subscribe(() => {
        console.log(`local device connected! id: ${this.socket.id}`)
      });

    this
      .get('disconnect')
      .subscribe(() => {
        console.log('local device disconnected!')
      });
  }*/

  on(event: string): Observable<any> {
    return Observable.fromEvent(this.socket, event);
  }

  emit(event: string, value: Object): void {
    this
      .socket
      .emit(event, value);
  }

  get(event: string) {
    return Observable.create((observer) => {
      this
        .socket
        .on(event, (data) => {
          observer.next(data);
        });
      return () => {
        this
          .socket
          .disconnect();
      };
    });
  }

  /*private myFunction = () => {

    if (_.isNull(localStorage.getItem('device'))) {
      var device = prompt("Identificador del dispositivo:", ""); //5AD9420A
      localStorage.setItem('device', device);
    }

    if (!_.isNull(device)) {
      this.socket.emit('resolve:device', device);
    }
  }*/
}
