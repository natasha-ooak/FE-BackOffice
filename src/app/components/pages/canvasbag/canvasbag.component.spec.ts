import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBagComponent } from './canvasbag.component';

describe('DashboardComponent', () => {
  let component: CanvasBagComponent;
  let fixture: ComponentFixture<CanvasBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
