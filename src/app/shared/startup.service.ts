import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import * as _ from 'lodash';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class StartupService {

  private url: string = "http://node-5622245.rhcloud.com:8000";
  private socket: any;
  private ip: string;
  private device: string;

  constructor() {

    if (_.isNull(localStorage.getItem('ip'))) {
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
      localStorage.setItem('ip', payload);
      this.ip = payload;

      this.socket = io(this.ip);
    });
  }*/

  private apiDevice = () => {
    this.socket = io(`http://${localStorage.getItem('ip')}:5728/device`);

    this.get('connect').subscribe(() => {
      console.log(`local device connected! id: ${this.socket.id}`)
    });

    this.get('disconnect').subscribe(() => {
      console.log('local device disconnected!')
    });
  }

  public on(event: string) {
    return Observable.fromEvent(this.socket, event);
  }

  public emit(event: string, value: Object) {
    this.socket.emit(event, value);
  }

  public emitCrypt(event: string, value: Object) {
    value = this.encryptMessage(value, this.socket.id);
    this.socket.emit(event, value);
  }

  public get(event: string) {
    return Observable.create((observer) => {
      this.socket.on(event, (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
  }

  public getCrypt(event: string) {
    return Observable.create((observer) => {
      this.socket.on(event, (data) => {
        data = this.decryptMessage(data, this.socket.id);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
  }

  private encryptMessage = (message, passphrase) => {
    return CryptoJS.AES.encrypt(message, passphrase);
  }

  private decryptMessage = (message, passphrase) => {
    let bytes = CryptoJS.AES.decrypt(message.toString(), passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
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
