import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountwebComponent } from './countweb.component';

describe('CountwebComponent', () => {
  let component: CountwebComponent;
  let fixture: ComponentFixture<CountwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
