import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewModuleComponent } from './addnew-module.component';

describe('AddnewModuleComponent', () => {
  let component: AddnewModuleComponent;
  let fixture: ComponentFixture<AddnewModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
