import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FESelectComponent } from './feselect.component';

describe('FESelectComponent', () => {
  let component: FESelectComponent;
  let fixture: ComponentFixture<FESelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FESelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FESelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
