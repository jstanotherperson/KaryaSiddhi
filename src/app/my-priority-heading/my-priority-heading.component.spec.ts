import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPriorityHeadingComponent } from './my-priority-heading.component';

describe('MyPriorityHeadingComponent', () => {
  let component: MyPriorityHeadingComponent;
  let fixture: ComponentFixture<MyPriorityHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPriorityHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPriorityHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
