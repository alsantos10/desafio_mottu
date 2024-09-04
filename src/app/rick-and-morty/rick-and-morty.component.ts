import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RickAndMortyService } from './rick-and-morty.service';
import { RickAndMortyCharacter, RickAndMortyCharacterResponse } from './rick-and-morty.model';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    PageNotFoundComponent
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss'
})
export class RickAndMortyComponent implements OnInit {

  list: RickAndMortyCharacterResponse | undefined;
  favorites: Array<number> = [];
  formFilter: FormGroup;
  filter: FormControl | undefined;

  constructor(
    private service: RickAndMortyService,
    private fb: FormBuilder
  ) {
    this.formFilter = this.fb.group({
      filter: ''
    });

    this.filter = this.formFilter.get('filter') as FormControl;

    this.filter.valueChanges.pipe(distinctUntilChanged(), debounceTime(1000)).subscribe(res => {
      this.search(res);
    });
  }
  
    ngOnInit(): void {
      this.getList();
    }

  search(term: string) {
    this.getList(term);
  }

  toogleFavorite(element: RickAndMortyCharacter) {
    const item = this.favorites.filter((itemId) => itemId === element.id);
    if (item.length > 0) {
      this.favorites.splice(this.favorites.findIndex(item => item === element.id), 1);
    } else {
      this.favorites.push(element.id);
    }
    this.service.updateFavorites(this.favorites);
  }

  isFavorite(favoriteId: number): boolean {
    return this.favorites.includes(favoriteId);
  }

  
  openSnackBar(message: string) {
    this.service.logError(message)
}

  private getList(name?: string) {
    this.list = undefined;
    this.service.getList(name).subscribe(res => {
      try {
        this.list = res;
      } catch (error) {
        mtest(error);
      }
    });
  }
}

function mtest(error: any) {
  console.log('add method', error)
}