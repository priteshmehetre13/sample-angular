import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeComponent } from './finalize.component';

describe('FinalizeComponent', () => {
  let component: FinalizeComponent;
  let fixture: ComponentFixture<FinalizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizeComponent]
    });
    fixture = TestBed.createComponent(FinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
