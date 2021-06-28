import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmecisComponent } from './acadmecis.component';

describe('AcadmecisComponent', () => {
  let component: AcadmecisComponent;
  let fixture: ComponentFixture<AcadmecisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmecisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmecisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
