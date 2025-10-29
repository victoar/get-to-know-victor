import {Component, OnInit} from '@angular/core';
import {DataControllerService} from '../services/data-controller.service';
import {WindowToolbarComponent} from '../sub-components/window-toolbar/window-toolbar.component';
import {HobbiesFolderComponent} from '../sub-components/hobbies-folder/hobbies-folder.component';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  standalone: true,
  imports: [WindowToolbarComponent, HobbiesFolderComponent],
})
export class HobbiesComponent implements OnInit {
  data: any;

  constructor(private dataController: DataControllerService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataController.getHobbiesData().subscribe((res) => {
      this.data = res;
    });
  }
}
