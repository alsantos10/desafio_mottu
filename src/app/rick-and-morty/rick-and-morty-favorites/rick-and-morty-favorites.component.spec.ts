import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyFavoritesComponent } from './rick-and-morty-favorites.component';

describe('RickAndMortyFavoritesComponent', () => {
  let component: RickAndMortyFavoritesComponent;
  let fixture: ComponentFixture<RickAndMortyFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyFavoritesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
