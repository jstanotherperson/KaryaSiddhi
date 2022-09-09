import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBarListComponent } from './task-bar-list.component';

describe('TaskBarListComponent', () => {
  let component: TaskBarListComponent;
  let fixture: ComponentFixture<TaskBarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
