import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class ConnectService {

  private url: string = "https://node-5622245.rhcloud.com";

  private socket = io(this.url);

  constructor() {
  }
}
