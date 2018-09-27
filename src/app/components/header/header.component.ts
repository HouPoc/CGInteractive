import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';
import { side_nav_control_service} from '../../side_nav_control.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public side_nav: side_nav_control_service) {

  }

  toggle_side_nav(){
    this.side_nav.getside();
  }

  ngOnInit () {

  }
}
