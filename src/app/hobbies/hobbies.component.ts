import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataControllerService} from '../services/data-controller.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient,
              private dataController: DataControllerService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataController.getHobbiesData().subscribe(res => {
      this.data = res;
    });
  }

}
