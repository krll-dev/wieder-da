import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Hilfe} from './hilfe';
import {provideRouter} from '@angular/router';

describe('Hilfe', () => {
  let component: Hilfe;
  let fixture: ComponentFixture<Hilfe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hilfe],
      providers: [provideRouter([])],
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
