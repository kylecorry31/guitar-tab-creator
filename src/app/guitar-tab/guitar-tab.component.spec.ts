import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarTabComponent } from './guitar-tab.component';

describe('GuitarTabComponent', () => {
  let component: GuitarTabComponent;
  let fixture: ComponentFixture<GuitarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
