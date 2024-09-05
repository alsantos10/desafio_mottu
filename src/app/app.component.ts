import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CustomToolbarComponent } from './shared/custom-toolbar/custom-toolbar.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomToolbarComponent,
    RickAndMortyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
