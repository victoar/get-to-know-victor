import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() description: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

  openNewTabWithUrl(url: string) {
    window.open(url);
  }
}
