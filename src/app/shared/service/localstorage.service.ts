import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage | undefined;

  constructor() { 
    this.storage = window.localStorage;
  }

  setItem(key: string, data: Array<number>): boolean {
    try {
      if (this.storage) {
        this.storage.setItem(key, JSON.stringify(data));
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error storing data for key ${key}: ${error}`);
      return false;
    }
  }

  getItem(key: string): Array<string> | null {
    const serializedData = this.storage?.getItem(key);
    if (serializedData) {
      try {
        if(this.storage) {
          return JSON.parse(serializedData);
        }
        return null;
      } catch (error) {
        console.error(`Error retrieving data for key ${key}: ${error}`);
      }
    }
    return null;
  }

  removeItem(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clearItem() {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}