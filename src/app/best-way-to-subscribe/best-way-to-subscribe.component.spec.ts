import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWayToSubscribeComponent } from './best-way-to-subscribe.component';

describe('BestWayToSubscribeComponent', () => {
  let component: BestWayToSubscribeComponent;
  let fixture: ComponentFixture<BestWayToSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestWayToSubscribeComponent]
    });
    fixture = TestBed.createComponent(BestWayToSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
