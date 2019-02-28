import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeDisplayComponent } from './initiative-display.component';

describe('InitiativeDisplayComponent', () => {
  let component: InitiativeDisplayComponent;
  let fixture: ComponentFixture<InitiativeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
