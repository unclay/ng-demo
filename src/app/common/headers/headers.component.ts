import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.less']
})
export class HeadersComponent implements OnInit {
  current: string;

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // 在这里处理路由事件
      this.handleRouteChange(event.url);
    });
  }
  handleRouteChange(url: string) {
    this.current = url;
  }

  ngOnInit() {
  }

}
