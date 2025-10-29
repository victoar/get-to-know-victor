import {Component, OnInit} from '@angular/core';
import {DataControllerService} from '../services/data-controller.service';
import {WindowToolbarComponent} from '../sub-components/window-toolbar/window-toolbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [WindowToolbarComponent],
})
export class HomeComponent implements OnInit {
  data: any;
  title: string = '';
  paragraphs: string[] = [];

  constructor(private dataController: DataControllerService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataController.getHomePageData().subscribe((res) => {
      this.title = res.title;
      this.paragraphs = res.paragraphs;
    });
  }

  logoClicked(logo: string) {
    switch (logo) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/victor-stefan-iacob-943bb1182/');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/victor_iacob/');
        break;
      case 'github':
        window.open('https://github.com/victoar');
        break;
    }
  }
}
