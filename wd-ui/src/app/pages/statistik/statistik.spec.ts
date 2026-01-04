import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Statistik} from './statistik';

describe('Statistik', () => {
  let component: Statistik;
  let fixture: ComponentFixture<Statistik>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistik]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistik);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
