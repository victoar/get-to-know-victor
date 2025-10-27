import { Component, OnInit } from '@angular/core';
import {state, style, trigger, transition, animate, AUTO_STYLE} from '@angular/animations';
import {MatDialog} from '@angular/material';
import {InfoPopupComponent} from '../sub-components/info-popup/info-popup.component';
import {HttpClient} from '@angular/common/http';
import {DataControllerService} from '../services/data-controller.service';

const DEFAULT_DURATION = 500;

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class PersonalInfoComponent implements OnInit {
  educationData: any;
  workExperienceData: any;
  projectsData: any;
  showDescriptionForEducation: boolean = false;
  showDescriptionForWorkExperience: boolean = false;
  showDescriptionForProjects: boolean = false;

  constructor(private dialog: MatDialog,
              private dataController: DataControllerService,
              private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataController.getPersonalInfoData().subscribe(res => {
      this.educationData = res.education;
      this.workExperienceData = res.work_experience;
      this.projectsData = res.projects;
    });
  }

  generateListHTML(items: string[]): string {
    let html = '<ul>';
    items.forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
    return html;
  }

  toggleDescriptionForEducation() {
    this.showDescriptionForEducation = !this.showDescriptionForEducation;
  }

  toggleDescriptionForWorkExperience() {
    this.showDescriptionForWorkExperience = !this.showDescriptionForWorkExperience;
  }

  toggleDescriptionForProjects() {
    this.showDescriptionForProjects = !this.showDescriptionForProjects;
  }

  downloadCV() {
    const fileName = 'Victor-Iacob-CV.pdf'; // Change this to your document name
    const filePath = `assets/documents/Victor Iacob - CV.pdf`;
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.openInfoDialog("My CV is being downloaded!", "OK");
  }

  openInfoDialog(message: string, button): void {
    this.dialog.open(InfoPopupComponent, {
      width: '300px',
      data: {
        message: message,
        button: button
      }
    });
  }
}
