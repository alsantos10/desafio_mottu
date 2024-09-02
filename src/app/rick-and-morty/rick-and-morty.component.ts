import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { RickAndMortyService } from './rick-and-morty.service';
import { RickAndMortyCharacterResponse } from './rick-and-morty.model';

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss'
})
export class RickAndMortyComponent implements OnInit {

  list: RickAndMortyCharacterResponse | undefined;

  constructor(private service: RickAndMortyService) {}

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.service.getList().subscribe(res => {
      this.list = res;
    });
  }

}
