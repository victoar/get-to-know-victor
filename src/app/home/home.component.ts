import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataControllerService} from '../services/data-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  title: string = '';
  paragraphs: string[] = [];

  constructor(private http: HttpClient,
              private dataController: DataControllerService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataController.getHomePageData().subscribe(res => {
      this.title = res.title;
      this.paragraphs = res.paragraphs;
    });
  }

  logoClicked(logo: string) {
    switch (logo) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/victor-stefan-iacob-943bb1182/");
        break;
      case "instagram":
        window.open("https://www.instagram.com/victor_iacob/");
        break;
      case "github":
        window.open("https://github.com/victoar");
        break;
    }
  }

}
