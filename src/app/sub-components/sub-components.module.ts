import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainMenuComponent} from './main-menu/main-menu.component';
import { MainMenuMobileComponent } from './main-menu-mobile/main-menu-mobile.component';
import { WindowToolbarComponent } from './window-toolbar/window-toolbar.component';
import {InfoPopupComponent} from './info-popup/info-popup.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HobbiesFolderComponent } from './hobbies-folder/hobbies-folder.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    MainMenuComponent,
    MainMenuMobileComponent,
    WindowToolbarComponent,
    InfoPopupComponent,
    TimelineComponent,
    HobbiesFolderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
    exports: [
        MainMenuComponent,
        WindowToolbarComponent,
        TimelineComponent,
        HobbiesFolderComponent,
        MainMenuMobileComponent
    ]
})
export class SubComponentsModule { }
