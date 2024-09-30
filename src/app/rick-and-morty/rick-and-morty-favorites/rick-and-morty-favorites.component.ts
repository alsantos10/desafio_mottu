import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { RickAndMortyCharacter } from '../rick-and-morty.model';
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

  list: Array<RickAndMortyCharacter> | undefined;
  viewItems = false;

  constructor(private service: RickAndMortyService) { }

  ngOnInit(): void {
    this.service.favorites$.subscribe(values => {
      this.getFavorites(values);
    });
  }

  removeFavorite(element: RickAndMortyCharacter) {
    if (this.list && this.list.filter((item) => item.id === element.id)) {
      this.list.splice(this.list.findIndex(item => item.id === element.id), 1);
      this.service.updateFavorites(this.list.map(item => item.id));
    }
  }

  private getFavorites(favoritesId: Array<number>) {
    this.viewItems = false;
    this.list = undefined;
    if (favoritesId && favoritesId.length > 0) {
      this.service.getFavorites(favoritesId).subscribe(res => {
        this.viewItems = true;
        this.list = res;
      });
    }
  }
}
