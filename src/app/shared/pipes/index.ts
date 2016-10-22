export  * from './app-picture.pipe';
export  * from './profile-picture.pipe';

import { BaAppPicturePipe } from './app-picture.pipe';
import { BaProfilePicturePipe } from './profile-picture.pipe';


export const PIPES = [
  BaAppPicturePipe,
  BaProfilePicturePipe,
];
