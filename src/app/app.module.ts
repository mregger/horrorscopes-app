import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignPickerComponent } from './components/sign-picker/sign-picker.component';
import { AboutComponent } from './components/about/about.component';
import { SubmitFateComponent } from './components/submit-fate/submit-fate.component';
import { HorrorscopeDisplayComponent } from './components/horrorscope-display/horrorscope-display.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SignPickerComponent,
    AboutComponent,
    SubmitFateComponent,
    HorrorscopeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
