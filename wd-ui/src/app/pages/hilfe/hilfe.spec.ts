import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hilfe } from './hilfe';

describe('Hilfe', () => {
  let component: Hilfe;
  let fixture: ComponentFixture<Hilfe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hilfe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hilfe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
