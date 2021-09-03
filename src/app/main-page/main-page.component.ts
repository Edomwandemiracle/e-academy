import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  show: boolean = false;
  successRoute: boolean = false;
  currentUrl: any;
  constructor(private router: Router, private titlePage: Title) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      // console.log('router', evt);

      if (evt instanceof NavigationEnd) {
        this.currentUrl = evt.url;
        if (this.currentUrl === '/success') {
          this.successRoute = true;
        } else {
          this.successRoute = false;
        }
      }

      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.name('()');
  }

  showMenu() {
    this.show = !this.show;
  }
  pageTitle(title: string) {
    this.titlePage.setTitle(title);
  }

  name(braces: string) {
    for (var i = 0; i < braces.length; i++) {
      // console.log(braces[i]);
      if (braces[i] !== braces[i - 1]) {
        console.log('false');
      } else {
        console.log('true');
      }
    }
  }
}
