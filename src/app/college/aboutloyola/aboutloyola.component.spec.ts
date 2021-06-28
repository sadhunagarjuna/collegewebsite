import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutloyolaComponent } from './aboutloyola.component';

describe('AboutloyolaComponent', () => {
  let component: AboutloyolaComponent;
  let fixture: ComponentFixture<AboutloyolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutloyolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutloyolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
