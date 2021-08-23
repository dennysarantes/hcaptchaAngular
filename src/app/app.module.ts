import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { NgHcaptchaModule } from 'ng-hcaptcha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHcaptchaModule.forRoot({
      siteKey: '2eaf963b-eeab-4516-9599-9daa18cd5138',
      languageCode: 'pt'
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
