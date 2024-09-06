import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {

  ngOnInit(): void {
    if (this.isFavorite) {
      this.title = 'Parece que você ainda não tem favoritos';
      this.subTitle = 'Volte a página inicial e escolha os melhores para você.';
    }
  }

  @Input()
  isFavorite: boolean = false;

  title = 'Nada foi encontrado';
  subTitle = 'Tente realizar uma nova busca.';
}
