import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Account Details',
      icon: 'mail'
    },
    {
      title: 'Loans',
      icon: 'mail'
    },
    {
      title: 'Cheque Cashing',
      icon: 'mail'
    },
    {
      title: 'All Products',
      icon: 'mail'
    },
    {
      title: 'Payments',
      icon: 'mail'
    },
    {
      title: 'Add Cards',
      icon: 'mail'
    },
    {
      title: 'Loyalty Rewards',
      icon: 'mail'
    },
    {
      title: 'Coupons',
      icon: 'mail'
    },
    {
      title: 'Messages',
      icon: 'mail'
    },
    {
      title: 'Contact Us',
      icon: 'mail'
    },
    {
      title: 'Store Locator',
      icon: 'mail'
    },
    {
      title: 'Logout',
      icon: 'mail'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  closeMenu() {
    this.menu.close();
  }
}
