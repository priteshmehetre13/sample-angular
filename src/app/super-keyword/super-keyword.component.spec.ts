import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperKeywordComponent } from './super-keyword.component';

describe('SuperKeywordComponent', () => {
  let component: SuperKeywordComponent;
  let fixture: ComponentFixture<SuperKeywordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperKeywordComponent]
    });
    fixture = TestBed.createComponent(SuperKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
