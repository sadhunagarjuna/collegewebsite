import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcontentbyfacultyComponent } from './econtentbyfaculty.component';

describe('EcontentbyfacultyComponent', () => {
  let component: EcontentbyfacultyComponent;
  let fixture: ComponentFixture<EcontentbyfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcontentbyfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcontentbyfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
