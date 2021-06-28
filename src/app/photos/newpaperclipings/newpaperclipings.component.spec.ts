import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaperclipingsComponent } from './newpaperclipings.component';

describe('NewpaperclipingsComponent', () => {
  let component: NewpaperclipingsComponent;
  let fixture: ComponentFixture<NewpaperclipingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpaperclipingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpaperclipingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
