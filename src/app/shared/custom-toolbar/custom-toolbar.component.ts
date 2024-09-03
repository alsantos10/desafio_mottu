import { Component, OnChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { LogoService } from '../service/logo.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { RickAndMortyService } from '../../rick-and-morty/rick-and-morty.service';

@Component({
  selector: 'custom-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './custom-toolbar.component.html',
  styleUrl: './custom-toolbar.component.scss'
})
export class CustomToolbarComponent implements OnChanges {
  logoUrl = 'logo.svg';
  public name?: string = 'logo';
  public svgIcon: any;

  favorites: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private service: RickAndMortyService
  ) {
    // favorites$
    this.service.favorites$.subscribe(res => this.favorites = res);
  }

  public ngOnChanges(): void {
    this.httpClient
      .get(`public/${this.name}.svg`, { responseType: 'text' })
      .subscribe(value => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }

}
