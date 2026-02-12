import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  set(key: string, value: any): void {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  get(key: string): any {
    const raw = localStorage.getItem(key);

    if (raw === null) {
      return null;
    }

    return JSON.parse(raw);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

}
