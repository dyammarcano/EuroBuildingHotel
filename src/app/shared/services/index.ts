export * from './crypto.service';
export * from './socket.service';
export * from './spinner.service';
export * from './storage.service';
export * from './time.service';
export * from './image-loader.service';


import {
  SocketService,
  StorageService,
  TimeService,
  SpinnerService,
  ImageLoaderService,
  CryptoService,
} from '../services';

export const SERVICES = [
  SocketService,
  StorageService,
  TimeService,
  SpinnerService,
  ImageLoaderService,
  CryptoService,
];
