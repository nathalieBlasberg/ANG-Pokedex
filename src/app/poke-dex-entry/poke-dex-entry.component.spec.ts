import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDexEntryComponent } from './poke-dex-entry.component';

describe('PokeDexEntryComponent', () => {
  let component: PokeDexEntryComponent;
  let fixture: ComponentFixture<PokeDexEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDexEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDexEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
