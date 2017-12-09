import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedetailComponent } from './timedetail.component';

describe('TimedetailComponent', () => {
  let component: TimedetailComponent;
  let fixture: ComponentFixture<TimedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
