import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { RickAndMortyCharacter, RickAndMortyCharacterResponse } from '../rick-and-morty.model';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty-favorites',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    PageNotFoundComponent
  ],
  templateUrl: './rick-and-morty-favorites.component.html',
  styleUrl: './rick-and-morty-favorites.component.scss'
})
export class RickAndMortyFavoritesComponent implements OnInit {

  constructor(private service: RickAndMortyService) {}

  list: Array<RickAndMortyCharacter> | undefined;

  ngOnInit(): void {
    this.service.favorites$.subscribe(values => {
      this.getFavorites(values);
    })
  }

  private getFavorites(favoritesId: Array<number>) {
    // this.list = undefined;
    this.service.getFavorites(favoritesId).subscribe(res => {
      this.list = res;
    });
  }

}
