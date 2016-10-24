import { Observable } from 'rxjs';


class Storage {

  public load = (key: string): any => {
    return localStorage.getItem(key);
  };

  public save = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  public erase = (key: string): any => {
    localStorage.removeItem(key);
  };

  public watch = (key: string): Observable<any> => {
    return Observable.create((data) => {

    });
  }
}

export { Storage as StorageService };
