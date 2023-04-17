import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFraisContentComponent } from './note-frais-content.component';

describe('NoteFraisContentComponent', () => {
  let component: NoteFraisContentComponent;
  let fixture: ComponentFixture<NoteFraisContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteFraisContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFraisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
