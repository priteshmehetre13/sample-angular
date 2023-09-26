import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectsComponent } from './rxjs-subjects.component';

describe('RxjsSubjectsComponent', () => {
  let component: RxjsSubjectsComponent;
  let fixture: ComponentFixture<RxjsSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsSubjectsComponent]
    });
    fixture = TestBed.createComponent(RxjsSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
