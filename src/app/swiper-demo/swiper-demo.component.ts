import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper-demo',
  templateUrl: './swiper-demo.component.html',
  styleUrls: ['./swiper-demo.component.scss']
})
export class SwiperDemoComponent {

  @Input('slides') slides?: any[];

  @Input('config')
  config?: SwiperOptions;

  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  ngAfterViewInit(): void {
    register();
    let autoplayOptions: AutoplayOptions = { delay: 2500 };
    let testConfig: SwiperOptions = {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: true
    };
    Object.assign(this.swiperRef?.nativeElement, testConfig);
    this.swiperRef?.nativeElement.initialize();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  // https://stackoverflow.com/questions/75326426/how-to-use-swiper-9-with-angular
  // https://codesandbox.io/p/sandbox/2q8nd6?file=/index.html:111,7-111,21
  onActiveIndexChange() {
    console.log(this.swiper)
    console.log(this.swiper?.activeIndex);
  }
}
