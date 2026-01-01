import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verlustmeldungen } from './verlustmeldungen';

describe('Verlustmeldungen', () => {
  let component: Verlustmeldungen;
  let fixture: ComponentFixture<Verlustmeldungen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verlustmeldungen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verlustmeldungen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
