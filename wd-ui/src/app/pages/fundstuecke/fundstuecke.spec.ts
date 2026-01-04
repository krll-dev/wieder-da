import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Fundstuecke} from './fundstuecke';

describe('Fundstuecke', () => {
  let component: Fundstuecke;
  let fixture: ComponentFixture<Fundstuecke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fundstuecke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fundstuecke);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
