import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeboxComponent } from './threebox.component';

describe('ThreeboxComponent', () => {
  let component: ThreeboxComponent;
  let fixture: ComponentFixture<ThreeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
