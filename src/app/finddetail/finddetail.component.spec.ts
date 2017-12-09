import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddetailComponent } from './finddetail.component';

describe('FinddetailComponent', () => {
  let component: FinddetailComponent;
  let fixture: ComponentFixture<FinddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
