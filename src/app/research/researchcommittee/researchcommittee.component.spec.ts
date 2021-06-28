import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchcommitteeComponent } from './researchcommittee.component';

describe('ResearchcommitteeComponent', () => {
  let component: ResearchcommitteeComponent;
  let fixture: ComponentFixture<ResearchcommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchcommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchcommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
