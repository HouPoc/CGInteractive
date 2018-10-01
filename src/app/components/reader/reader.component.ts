import { Component, OnInit} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { side_nav_control_service} from '../../side_nav_control.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css'],
})
export class ReaderComponent implements OnInit {

  @ViewChild('sideNav') public sideNav: MatSidenav;
  public sections: any[];
  constructor(public breakpointObserver: BreakpointObserver,
              public side_nav: side_nav_control_service,
              ) {
  }

  ngOnInit() {
    this.side_nav.setSidenav(this.sideNav);
    // make the side navigation bar responsive
    this.side_nav_responsive();
    // Mock Display_Data
    this.sections = [{name: 'Intern Connection', content: 'TEST'},
     {name: 'Scheduler', content: 'TEST'}, {name: 'Memory', content: 'TEST'}];
    console.log(this.sections);
  }

  side_nav_responsive () {
    this.breakpointObserver
    .observe(['(min-width: 900px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.sideNav.toggle();
      } else {
        this.sideNav.toggle();
      }
    });
  }

}
