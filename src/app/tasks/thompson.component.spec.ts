import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThompsonComponent } from './thompson.component';

describe('ThompsonComponent', () => {
  let component: ThompsonComponent;
  let fixture: ComponentFixture<ThompsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThompsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThompsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
