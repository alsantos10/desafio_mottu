import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RickAndMortyCharacter, RickAndMortyCharacterResponse } from './rick-and-morty.model';

const URL_API = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  private favoriteSubject = new BehaviorSubject<Array<number>>([]);
  favorites$ = this.favoriteSubject.asObservable();

  updateFavorites(favorites: number[]) {
    this.favoriteSubject.next(favorites);
  }

  getList(name?: string, page?: number) {
    let param = new HttpParams();
    if (name) {
      param = param.set('name', name);
    }
    if (page) {
      param = param.set('page', page);
    }
    return this.http.get<RickAndMortyCharacterResponse>(`${URL_API}/character`, { params: param })
      .pipe(
        catchError(err => {
          handleError(err);
          return of(err);
        }));
  }

  getFavorites(favoritesId: Array<number>) {
    return this.http.get<Array<RickAndMortyCharacter>|RickAndMortyCharacter>(`${URL_API}/character/${favoritesId}`)
      .pipe(
        map(res => (favoritesId.length === 1) ? [res] : res),
        catchError(err => {
          handleError(err);
          return of(err);
        }));
  }
}


function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return new Error('Something bad happened; please try again later.');
}