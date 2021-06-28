import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikilinksComponent } from './wikilinks.component';

describe('WikilinksComponent', () => {
  let component: WikilinksComponent;
  let fixture: ComponentFixture<WikilinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikilinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikilinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
