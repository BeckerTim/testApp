import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent {
constructor(public auth: AuthService) { }


  login(): void {
    const redirectUrl = '/app';
    const appState = { target: redirectUrl };
    this.auth.loginWithRedirect({ appState });
  }

  logout(): void {
    this.auth.logout();
  }
}
