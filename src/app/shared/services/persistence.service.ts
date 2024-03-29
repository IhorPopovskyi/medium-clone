import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error saving data on localStorage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log('Error getting data from localStorage', error);
      return null;
    }
  }
}
