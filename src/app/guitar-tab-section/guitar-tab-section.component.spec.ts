import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarTabSectionComponent } from './guitar-tab-section.component';

describe('GuitarTabSectionComponent', () => {
  let component: GuitarTabSectionComponent;
  let fixture: ComponentFixture<GuitarTabSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarTabSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarTabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
