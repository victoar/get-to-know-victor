import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubComponentsModule} from './sub-components/sub-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfoPopupComponent} from './sub-components/info-popup/info-popup.component';
import {DataControllerService} from './services/data-controller.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SubComponentsModule,
        HttpClientModule
    ],
    providers: [
        DataControllerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
