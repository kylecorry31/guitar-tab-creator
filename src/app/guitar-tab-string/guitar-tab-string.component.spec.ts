import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarTabStringComponent } from './guitar-tab-string.component';

describe('GuitarTabStringComponent', () => {
  let component: GuitarTabStringComponent;
  let fixture: ComponentFixture<GuitarTabStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarTabStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarTabStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
