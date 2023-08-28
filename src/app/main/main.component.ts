import { Component, ElementRef, ViewChild } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isMobile: boolean = false;

  constructor(
    private notification: NzNotificationService,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.checkOSAnimation();

    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  checkOSAnimation() {
    // https://since1979.dev/respecting-prefers-reduced-motion-with-javascript-and-react/#:~:text=Prefers%20reduced%20motion%20with%20vanilla%20Javascript&text=const%20mediaQuery%20%3D%20window.,matches%20or%20is%20not%20available.&text=%2F%2F%20Ads%20an%20event%20listener,in%20the%20media%20query's%20value.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // 檢查媒體查詢是否匹配或不可用
    if (!mediaQuery || mediaQuery.matches) {
      console.log('AnimationNotWork')
      this.notification.warning('偵測 OS 動畫選項關閉', '為獲得最佳觀看體驗，請開啟此裝置的動畫功能。');
    }

    // 添加事件偵聽器以檢查媒體查詢值的更改
    mediaQuery.addEventListener("change", () => {
      if (mediaQuery.matches) {
        console.log('AnimationNotWork')
        this.notification.warning('偵測 OS 動畫選項關閉', '為獲得最佳觀看體驗，請開啟此裝置的動畫功能。');
      }
    });
  }

  // 抽屜
  tocVisible = false;
  contactVisible = false;

  tocOpen(): void {
    this.tocVisible = true;
  }

  tocClose(): void {
    this.tocVisible = false;
  }

  contactOpen(): void {
    this.contactVisible = true;
  }

  contactClose(): void {
    this.contactVisible = false;
  }

  // 判斷是否出現在畫面
  // https://kodingkhurram.github.io/animate.css-dynamic.demo/

  @ViewChild('yourElement1') yourElement1!: ElementRef;
  @ViewChild('yourElement2') yourElement2!: ElementRef;
  @ViewChild('yourElement3') yourElement3!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null, // 使用瀏覽器視窗作為根元素
      rootMargin: '0px', // 邊距設為 0px
      threshold: 0.1 // 元素可見度的閾值，這裡設為 0.5，表示當元素至少一半顯示在畫面中時觸發
    };

    const observer1 = new IntersectionObserver(this.handleIntersection, options);
    observer1.observe(this.yourElement1.nativeElement);
    const observer2 = new IntersectionObserver(this.handleIntersection, options);
    observer2.observe(this.yourElement2.nativeElement);
    const observer3 = new IntersectionObserver(this.handleIntersection, options);
    observer3.observe(this.yourElement3.nativeElement);
  }

  // https://stackoverflow.com/questions/48665785/intersectionobserver-method-not-working-javascript
  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 元素進入畫面中
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__fadeInLeft');
      } else {
        // 元素離開畫面
      }
    });
  }
}
