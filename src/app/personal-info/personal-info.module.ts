import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import {PersonalInfoComponent} from './personal-info.component';
import {SubComponentsModule} from '../sub-components/sub-components.module';


@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    SubComponentsModule
  ]
})
export class PersonalInfoModule { }
