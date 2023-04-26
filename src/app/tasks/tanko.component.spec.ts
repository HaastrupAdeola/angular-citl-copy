import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankoComponent } from './tanko.component';

describe('TankoComponent', () => {
  let component: TankoComponent;
  let fixture: ComponentFixture<TankoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
