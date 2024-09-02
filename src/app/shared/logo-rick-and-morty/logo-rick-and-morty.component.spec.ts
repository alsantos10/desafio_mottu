import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoRickAndMortyComponent } from './logo-rick-and-morty.component';

describe('LogoRickAndMortyComponent', () => {
  let component: LogoRickAndMortyComponent;
  let fixture: ComponentFixture<LogoRickAndMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoRickAndMortyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoRickAndMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
