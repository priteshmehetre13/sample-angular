import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInjetorComponent } from './custom-injetor.component';

describe('CustomInjetorComponent', () => {
  let component: CustomInjetorComponent;
  let fixture: ComponentFixture<CustomInjetorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInjetorComponent]
    });
    fixture = TestBed.createComponent(CustomInjetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
