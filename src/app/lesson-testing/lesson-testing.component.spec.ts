import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTestingComponent } from './lesson-testing.component';

describe('LessonTestingComponent', () => {
  let component: LessonTestingComponent;
  let fixture: ComponentFixture<LessonTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
