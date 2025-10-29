import {Component} from '@angular/core';
import {MainMenuComponent} from './sub-components/main-menu/main-menu.component';
import {MainMenuMobileComponent} from './sub-components/main-menu-mobile/main-menu-mobile.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MainMenuComponent, MainMenuMobileComponent, RouterOutlet],
})
export class AppComponent {
  title = 'victor-cv';
}
