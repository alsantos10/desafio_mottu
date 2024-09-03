import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, data: any): void {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error(`Error storing data for key ${key}: ${error}`);
    }
  }

  getItem(key: string): any | null {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
      try {
        return JSON.parse(serializedData);
      } catch (error) {
        console.error(`Error retrieving data for key ${key}: ${error}`);
      }
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}