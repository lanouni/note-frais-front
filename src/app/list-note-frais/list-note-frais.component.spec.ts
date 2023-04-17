import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNoteFraisComponent } from './list-note-frais.component';

describe('ListNoteFraisComponent', () => {
  let component: ListNoteFraisComponent;
  let fixture: ComponentFixture<ListNoteFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNoteFraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNoteFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
