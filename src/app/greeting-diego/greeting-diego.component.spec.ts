import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingDiegoComponent } from './greeting-diego.component';

describe('GreetingDiegoComponent', () => {
  let component: GreetingDiegoComponent;
  let fixture: ComponentFixture<GreetingDiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingDiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
