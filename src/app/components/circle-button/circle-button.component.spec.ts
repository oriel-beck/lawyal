import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleButtonComponent } from './circle-button.component';

describe('CircleButtonComponent', () => {
  let component: CircleButtonComponent;
  let fixture: ComponentFixture<CircleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircleButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
