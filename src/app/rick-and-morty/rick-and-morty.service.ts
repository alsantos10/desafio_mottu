import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { RickAndMortyCharacterResponse } from './rick-and-morty.model';

const URL_API = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<RickAndMortyCharacterResponse>(`${URL_API}/character`).pipe(tap(res => console.log(res)));
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
