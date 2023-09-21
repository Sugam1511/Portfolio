import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowComponent } from './hollow.component';

describe('HollowComponent', () => {
  let component: HollowComponent;
  let fixture: ComponentFixture<HollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
