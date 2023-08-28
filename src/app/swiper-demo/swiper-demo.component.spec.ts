import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDemoComponent } from './swiper-demo.component';

describe('AsasdasdComponent', () => {
  let component: SwiperDemoComponent;
  let fixture: ComponentFixture<SwiperDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperDemoComponent]
    });
    fixture = TestBed.createComponent(SwiperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
