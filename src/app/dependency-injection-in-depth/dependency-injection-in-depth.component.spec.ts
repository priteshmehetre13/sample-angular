import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionInDepthComponent } from './dependency-injection-in-depth.component';

describe('DependencyInjectionInDepthComponent', () => {
  let component: DependencyInjectionInDepthComponent;
  let fixture: ComponentFixture<DependencyInjectionInDepthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInjectionInDepthComponent]
    });
    fixture = TestBed.createComponent(DependencyInjectionInDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
