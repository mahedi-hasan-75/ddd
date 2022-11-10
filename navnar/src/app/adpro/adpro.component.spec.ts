import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdproComponent } from './adpro.component';

describe('AdproComponent', () => {
  let component: AdproComponent;
  let fixture: ComponentFixture<AdproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
