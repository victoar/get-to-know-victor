import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-main-menu-mobile',
  templateUrl: './main-menu-mobile.component.html',
  styleUrls: ['./main-menu-mobile.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class MainMenuMobileComponent implements OnInit {
  isMenuExpanded: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  openBurgerMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  folderClicked(folder: string) {
    this.router.navigate(['/' + folder]);
    this.isMenuExpanded = false;
  }
}
