export * from './crypto.service';
export * from './socket.service';
export * from './spinner.service';
export * from './storage.service';
export * from './time.service';
export * from './image-loader.service';
export * from './alerts.service';


import {
  SocketService,
  StorageService,
  TimeService,
  SpinnerService,
  ImageLoaderService,
  CryptoService,
  AlertsService,
} from '../services';

export const SERVICES = [
  SocketService,
  StorageService,
  TimeService,
  SpinnerService,
  ImageLoaderService,
  CryptoService,
  AlertsService,
];
