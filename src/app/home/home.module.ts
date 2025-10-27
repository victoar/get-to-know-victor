import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {SubComponentsModule} from '../sub-components/sub-components.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      SubComponentsModule
    ]
})
export class HomeModule { }
