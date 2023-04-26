import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeolaComponent } from './adeola.component';

describe('AdeolaComponent', () => {
  let component: AdeolaComponent;
  let fixture: ComponentFixture<AdeolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdeolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdeolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
