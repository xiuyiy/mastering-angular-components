import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsComponent } from './fals.component';

describe('FalsComponent', () => {
  let component: FalsComponent;
  let fixture: ComponentFixture<FalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
