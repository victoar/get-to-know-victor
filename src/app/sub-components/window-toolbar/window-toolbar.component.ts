import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-window-toolbar',
  templateUrl: './window-toolbar.component.html',
  styleUrls: ['./window-toolbar.component.scss'],
  standalone: true,
})
export class WindowToolbarComponent implements OnInit {
  @Input() selectedTab: string;

  constructor() {}

  ngOnInit() {}

  decidePathToIcon() {
    switch (this.selectedTab) {
      case 'home':
        return 'assets/images/home-main.png';
      case 'personal-info':
        return 'assets/images/education-main.png';
      case 'hobbies':
        return 'assets/images/hobbies-main.png';
    }
  }

  decideTabName() {
    switch (this.selectedTab) {
      case 'home':
        return 'Home';
      case 'personal-info':
        return 'Personal Information';
      case 'hobbies':
        return 'Hobbies';
    }
  }
}
