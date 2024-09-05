import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatInputModule } from '@angular/material/input';

import { RickAndMortyCharacter, RickAndMortyCharacterResponse } from './rick-and-morty.model';
import { RickAndMortyService } from './rick-and-morty.service';
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
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss'
})
export class RickAndMortyComponent implements OnInit, AfterContentInit {

  list: RickAndMortyCharacterResponse | undefined;
  favorites: Array<number> = [];
  formFilter: FormGroup;
  filter: FormControl | undefined;

  length: number | undefined;
  pageSize: number | undefined = 20;

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

  ngAfterContentInit(): void {
    this.service.favorites$.subscribe(item => {
      this.favorites = item;
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

// {length: 826pageIndex: 1pageSize: 20previousPageIndex: 0}
getPage(page: {length: number; pageIndex: number; pageSize: number; previousPageIndex?: number}) {
  console.log(page);
  this.getList(undefined, page.pageIndex + 1);
}

  private getList(name?: string, page?: number) {
    this.service.getList(name, page).subscribe(res => {
        this.list = res;
        this.length = this.list?.info.count;
    });
  }
}