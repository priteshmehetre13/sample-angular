import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoseMoveComponent } from './mose-move.component';

describe('MoseMoveComponent', () => {
  let component: MoseMoveComponent;
  let fixture: ComponentFixture<MoseMoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoseMoveComponent]
    });
    fixture = TestBed.createComponent(MoseMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
