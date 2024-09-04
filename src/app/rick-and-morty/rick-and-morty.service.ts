import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RickAndMortyCharacterResponse } from './rick-and-morty.model';

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

  getList(name?: string) {
    let param = new HttpParams();
    if (name) {
      param = param.set('name', name);
    }
    return this.http.get<RickAndMortyCharacterResponse>(`${URL_API}/character`,{params: param})
    // .pipe(tap(res => console.log(res)));
    .pipe(
      catchError(err => {
        handleError(err);
        this.logError(err);
      return of(err);
    }),);
    
  }

  logError(message:string){
    this._snackBar.open(message,'Dismiss')
 }


  // query() {
  //   characters(page: 2, filter: { name: "rick" }) {
  //     info {
  //       count
  //     }
  //     results {
  //       name
  //     }
  //   }
  //   location(id: 1) {
  //     id
  //   }
  //   episodesByIds(ids: [1, 2]) {
  //     id
  //   }
  // }
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