import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { LogoRickAndMortyComponent } from './shared/logo-rick-and-morty/logo-rick-and-morty.component';
import { CustomToolbarComponent } from './shared/custom-toolbar/custom-toolbar.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CustomToolbarComponent,
    RickAndMortyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'spa_desafio_mottu';
  
 
  ngAfterViewInit(): void {
    // console.log(this.filter)
  }
 
}
