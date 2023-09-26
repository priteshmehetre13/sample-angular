import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastComponent } from './multicast.component';

describe('MulticastComponent', () => {
  let component: MulticastComponent;
  let fixture: ComponentFixture<MulticastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulticastComponent]
    });
    fixture = TestBed.createComponent(MulticastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
