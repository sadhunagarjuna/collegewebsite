import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchinfoComponent } from './researchinfo.component';

describe('ResearchinfoComponent', () => {
  let component: ResearchinfoComponent;
  let fixture: ComponentFixture<ResearchinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
