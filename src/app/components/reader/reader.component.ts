import { Component, OnInit} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core'
import { BreakpointObserver,Breakpoints,BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { side_nav_control_service} from '../../side_nav_control.service'

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css'],
})
export class ReaderComponent implements OnInit {

  @ViewChild('sideNav') public sideNav: MatSidenav;
  constructor(public breakpointObserver: BreakpointObserver,
              public side_nav: side_nav_control_service) {
  }

  ngOnInit() {
    this.side_nav.setSidenav(this.sideNav);
    this.breakpointObserver
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sideNav.toggle();
          // Show Side Navigation Bar

        } else {
          // Hide Side Navigation Bar
          this.sideNav.toggle();
        }
      });
  }

}
