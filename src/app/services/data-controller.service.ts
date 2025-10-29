import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataControllerService {

  GENERAL_PATH: string = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) { }

  getHomePageData(): Observable<any> {
    const endpoint = '/home'; // Replace with your endpoint URL
    return this.http.get<any>(this.GENERAL_PATH + endpoint);
  }

  getPersonalInfoData(): Observable<any> {
    const endpoint = '/personal-info'; // Replace with your endpoint URL
    return this.http.get<any>(this.GENERAL_PATH + endpoint);
  }

  getHobbiesData(): Observable<any> {
    const endpoint = '/hobbies'; // Replace with your endpoint URL
    return this.http.get<any>(this.GENERAL_PATH + endpoint);
  }
}
