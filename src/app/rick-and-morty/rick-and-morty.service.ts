import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

import { RickAndMortyCharacterResponse } from './rick-and-morty.model';

const URL_API = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

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
    return this.http.get<RickAndMortyCharacterResponse>(`${URL_API}/character`,{params: param}).pipe(tap(res => console.log(res)));
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
