import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireEditTaskComponent } from './fire-edit-task.component';

describe('FireEditTaskComponent', () => {
  let component: FireEditTaskComponent;
  let fixture: ComponentFixture<FireEditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireEditTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
