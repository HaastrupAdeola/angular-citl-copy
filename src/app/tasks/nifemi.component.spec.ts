import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NifemiComponent } from './nifemi.component';

describe('NifemiComponent', () => {
  let component: NifemiComponent;
  let fixture: ComponentFixture<NifemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NifemiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NifemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
