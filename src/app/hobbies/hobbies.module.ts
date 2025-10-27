import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import {HobbiesComponent} from './hobbies.component';
import {SubComponentsModule} from '../sub-components/sub-components.module';


@NgModule({
  declarations: [
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    HobbiesRoutingModule,
    SubComponentsModule
  ]
})
export class HobbiesModule { }
