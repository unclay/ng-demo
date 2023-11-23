import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.less']
})
export class SidebarsComponent implements OnInit {
  current: any;

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // 在这里处理路由事件
      this.handleRouteChange(event.url);
    });

    /* global bootstrap: false */
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="dropdown"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      console.log(tooltipTriggerEl);
      new (window as any).bootstrap.Tooltip(tooltipTriggerEl)
    })

  }

  handleRouteChange(url: string) {
    this.current = url;
    console.log(123, url);
  }

  ngOnInit() {
  }

}
