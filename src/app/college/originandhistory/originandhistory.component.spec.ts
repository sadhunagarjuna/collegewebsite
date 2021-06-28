import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginandhistoryComponent } from './originandhistory.component';

describe('OriginandhistoryComponent', () => {
  let component: OriginandhistoryComponent;
  let fixture: ComponentFixture<OriginandhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginandhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginandhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
