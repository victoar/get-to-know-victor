import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hobbies-folder',
  templateUrl: './hobbies-folder.component.html',
  styleUrls: ['./hobbies-folder.component.scss']
})
export class HobbiesFolderComponent implements OnInit {
  @Input() folderName: string;
  @Input() imgList: string[];
  @Input() description: string;

  tooltipVisible = false;

  constructor() { }

  ngOnInit() {
  }

  showTooltip() {
    this.tooltipVisible = true;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }
}
