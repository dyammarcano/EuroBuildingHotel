import * as CryptoJS from 'crypto-js';


export class CryptoService {

  public encrypt = (message: string, passphrase: string): any => {
    return CryptoJS.AES.encrypt(message, passphrase);
  }

  public decrypt = (ciphertext: string, passphrase: string): any => {
    let bytes = CryptoJS.AES.decrypt(ciphertext.toString(), passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
