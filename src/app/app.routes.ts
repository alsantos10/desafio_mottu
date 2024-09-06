import { Routes } from '@angular/router';

import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { RickAndMortyFavoritesComponent } from './rick-and-morty/rick-and-morty-favorites/rick-and-morty-favorites.component';

export const routes: Routes = [
    { path: 'characters', component: RickAndMortyComponent },
    { path: 'favorites', component: RickAndMortyFavoritesComponent },
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];