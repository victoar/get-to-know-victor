import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu-mobile',
  templateUrl: './main-menu-mobile.component.html',
  styleUrls: ['./main-menu-mobile.component.scss']
})
export class MainMenuMobileComponent implements OnInit {
  isMenuExpanded: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openBurgerMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  folderClicked(folder: string) {
    this.router.navigate(['/' + folder]);
    this.isMenuExpanded = false;
  }
}
