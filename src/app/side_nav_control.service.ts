import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class side_nav_control_service {
  public sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
  this.sidenav = sidenav;
  }

  public getside() {
    this.sidenav.toggle();
  }

}
